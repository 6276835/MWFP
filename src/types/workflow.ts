export interface WorkflowNode {
  id: string;
  type: 'main' | 'branch';
  number: string;
  title: string;
  content: string;
  position: { x: number; y: number };
  style?: {
    backgroundColor?: string;
    textColor?: string;
    borderRadius?: number;
    fontSize?: number;
  };
  // Branch node specific fields
  section?: string;
  phase?: string;
  personnel?: string;
  action?: string;
  completionCriteria?: string;
  deliverables?: string;
  standardDuration?: number;
}

export interface WorkflowConnection {
  id: string;
  source: string;
  target: string;
  type: 'straight' | 'curved';
}

export interface WorkflowGroup {
  id: string;
  name: string;
  nodeIds: string[];
}

export interface Workflow {
  id: string;
  name: string;
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
  groups: WorkflowGroup[];
  createdAt: string;
  updatedAt: string;
  ownerId: string;
  category?: string;
}
