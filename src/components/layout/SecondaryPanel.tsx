import React from 'react';
import { Panel, PanelResizeHandle } from 'react-resizable-panels';

interface SecondaryPanelProps {
  children: React.ReactNode;
}

const SecondaryPanel: React.FC<SecondaryPanelProps> = ({ children }) => {
  return (
    <Panel defaultSize={20} minSize={15} maxSize={30}>
      <div className="h-full bg-gray-50 border-r border-gray-200">
        <div className="p-4">{children}</div>
      </div>
      <PanelResizeHandle className="w-1 bg-gray-200 hover:bg-blue-500 transition-colors" />
    </Panel>
  );
};

export default SecondaryPanel;
