import React from 'react';
import {
  Save,
  FileJson,
  Undo2,
  Redo2,
  LogIn,
  BookOpen,
  Languages,
  Download,
  Workflow,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="h-14 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Workflow className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-lg">MWFP</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md hover:bg-gray-100">
              <FileJson className="w-4 h-4" />
              <span>{t('file')}</span>
            </button>
            
            <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md hover:bg-gray-100">
              <Save className="w-4 h-4" />
              <span>{t('save')}</span>
            </button>
            
            <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md hover:bg-gray-100">
              <Undo2 className="w-4 h-4" />
            </button>
            
            <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md hover:bg-gray-100">
              <Redo2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md hover:bg-gray-100">
            <LogIn className="w-4 h-4" />
            <span>{t('login')}</span>
          </button>
          
          <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md hover:bg-gray-100">
            <BookOpen className="w-4 h-4" />
            <span>{t('tutorial')}</span>
          </button>
          
          <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md hover:bg-gray-100">
            <Languages className="w-4 h-4" />
            <span>{t('language')}</span>
          </button>
          
          <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md hover:bg-gray-100">
            <Download className="w-4 h-4" />
            <span>{t('download')}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
