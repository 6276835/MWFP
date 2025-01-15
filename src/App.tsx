import React from 'react';
import { PanelGroup } from 'react-resizable-panels';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import SecondaryPanel from './components/layout/SecondaryPanel';
import MainContent from './components/layout/MainContent';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <PanelGroup direction="horizontal" className="flex-1">
          <SecondaryPanel>
            {/* Secondary panel content will be dynamically loaded based on sidebar selection */}
          </SecondaryPanel>
          <MainContent />
        </PanelGroup>
      </div>
    </div>
  );
}

export default App;
