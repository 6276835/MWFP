import { create } from 'zustand';
import type { Workflow, WorkflowNode, WorkflowConnection, WorkflowGroup } from '../types/workflow';

interface WorkflowState {
  currentWorkflow: Workflow | null;
  history: Workflow[];
  historyIndex: number;
  setWorkflow: (workflow: Workflow) => void;
  updateNode: (nodeId: string, updates: Partial<WorkflowNode>) => void;
  addNode: (node: WorkflowNode) => void;
  removeNode: (nodeId: string) => void;
  addConnection: (connection: WorkflowConnection) => void;
  removeConnection: (connectionId: string) => void;
  createGroup: (nodes: string[], name: string) => void;
  ungroup: (groupId: string) => void;
  undo: () => void;
  redo: () => void;
  saveToHistory: () => void;
}

export const useWorkflowStore = create<WorkflowState>((set, get) => ({
  currentWorkflow: null,
  history: [],
  historyIndex: -1,

  setWorkflow: (workflow) => {
    set({ currentWorkflow: workflow });
  },

  updateNode: (nodeId, updates) => {
    const { currentWorkflow } = get();
    if (!currentWorkflow) return;

    const newNodes = currentWorkflow.nodes.map((node) =>
      node.id === nodeId ? { ...node, ...updates } : node
    );

    set({
      currentWorkflow: {
        ...currentWorkflow,
        nodes: newNodes,
      },
    });
    get().saveToHistory();
  },

  addNode: (node) => {
    const { currentWorkflow } = get();
    if (!currentWorkflow) return;

    set({
      currentWorkflow: {
        ...currentWorkflow,
        nodes: [...currentWorkflow.nodes, node],
      },
    });
    get().saveToHistory();
  },

  removeNode: (nodeId) => {
    const { currentWorkflow } = get();
    if (!currentWorkflow) return;

    set({
      currentWorkflow: {
        ...currentWorkflow,
        nodes: currentWorkflow.nodes.filter((node) => node.id !== nodeId),
        connections: currentWorkflow.connections.filter(
          (conn) => conn.source !== nodeId && conn.target !== nodeId
        ),
      },
    });
    get().saveToHistory();
  },

  addConnection: (connection) => {
    const { currentWorkflow } = get();
    if (!currentWorkflow) return;

    set({
      currentWorkflow: {
        ...currentWorkflow,
        connections: [...currentWorkflow.connections, connection],
      },
    });
    get().saveToHistory();
  },

  removeConnection: (connectionId) => {
    const { currentWorkflow } = get();
    if (!currentWorkflow) return;

    set({
      currentWorkflow: {
        ...currentWorkflow,
        connections: currentWorkflow.connections.filter(
          (conn) => conn.id !== connectionId
        ),
      },
    });
    get().saveToHistory();
  },

  createGroup: (nodeIds, name) => {
    const { currentWorkflow } = get();
    if (!currentWorkflow) return;

    const newGroup: WorkflowGroup = {
      id: crypto.randomUUID(),
      name,
      nodeIds,
    };

    set({
      currentWorkflow: {
        ...currentWorkflow,
        groups: [...currentWorkflow.groups, newGroup],
      },
    });
    get().saveToHistory();
  },

  ungroup: (groupId) => {
    const { currentWorkflow } = get();
    if (!currentWorkflow) return;

    set({
      currentWorkflow: {
        ...currentWorkflow,
        groups: currentWorkflow.groups.filter((group) => group.id !== groupId),
      },
    });
    get().saveToHistory();
  },

  undo: () => {
    const { historyIndex, history } = get();
    if (historyIndex <= 0) return;

    set({
      historyIndex: historyIndex - 1,
      currentWorkflow: history[historyIndex - 1],
    });
  },

  redo: () => {
    const { historyIndex, history } = get();
    if (historyIndex >= history.length - 1) return;

    set({
      historyIndex: historyIndex + 1,
      currentWorkflow: history[historyIndex + 1],
    });
  },

  saveToHistory: () => {
    const { currentWorkflow, history, historyIndex } = get();
    if (!currentWorkflow) return;

    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ ...currentWorkflow });

    set({
      history: newHistory,
      historyIndex: historyIndex + 1,
    });
  },
}));
