import React, { useState } from 'react';
import {
  GitBranch,
  FolderTree,
  LayoutTemplate,
  Settings,
  AlignVerticalJustifyCenter,
  User,
  Palette,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../utils/cn';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = React.useState('workflow');
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = [
    { id: 'workflow', icon: GitBranch, label: 'workflow' },
    { id: 'categories', icon: FolderTree, label: 'categories' },
    { id: 'templates', icon: LayoutTemplate, label: 'templates' },
    { id: 'settings', icon: Settings, label: 'settings' },
    { id: 'arrange', icon: AlignVerticalJustifyCenter, label: 'arrange' },
    { id: 'profile', icon: User, label: 'profile' },
    { id: 'theme', icon: Palette, label: 'theme' },
  ];

  return (
    <div className={cn(
      "bg-gray-800 flex flex-col items-center py-4 transition-all duration-300",
      isExpanded ? "w-48" : "w-16"
    )}>
      <div className="flex-1">
        {menuItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            className={cn(
              "w-full mb-2 flex items-center transition-colors px-4 py-3 rounded-lg",
              activeItem === id
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-gray-700 hover:text-white"
            )}
            onClick={() => setActiveItem(id)}
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            {isExpanded && (
              <span className="ml-3 text-sm">{t(label)}</span>
            )}
          </button>
        ))}
      </div>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full mt-4 flex items-center justify-center px-4 py-3 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
      >
        {isExpanded ? (
          <>
            <PanelLeftClose className="w-5 h-5" />
            <span className="ml-3 text-sm">{t('collapse')}</span>
          </>
        ) : (
          <PanelLeftOpen className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
