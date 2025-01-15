import React from 'react';
import { Panel } from 'react-resizable-panels';
import { useDndContext, DndContext } from '@dnd-kit/core';
import { useWorkflowStore } from '../../store/workflowStore';
import { useTranslation } from 'react-i18next';

const MainContent: React.FC = () => {
  const { t } = useTranslation();
  const workflow = useWorkflowStore((state) => state.currentWorkflow);

  return (
    <Panel>
      <div className="h-full bg-gray-100 overflow-hidden">
        <DndContext>
          <div className="h-full p-8">
            {/* Workflow canvas will be implemented here */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-full">
              {workflow ? (
                <div>
                  {/* Workflow nodes and connections will be rendered here */}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  {t('createOrImportWorkflow')}
                </div>
              )}
            </div>
          </div>
        </DndContext>
      </div>
    </Panel>
  );
};

export default MainContent;
