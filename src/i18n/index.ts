import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      file: 'File',
      save: 'Save',
      login: 'Login',
      tutorial: 'Tutorial',
      language: 'Language',
      download: 'Download',
      workflow: 'Workflow',
      categories: 'Categories',
      templates: 'Templates',
      settings: 'Settings',
      arrange: 'Arrange',
      profile: 'Profile',
      theme: 'Theme',
      createOrImportWorkflow: 'Create a new workflow or import an existing one',
      collapse: 'Collapse',
    },
  },
  zh: {
    translation: {
      file: '文件',
      save: '保存',
      login: '登录',
      tutorial: '教程',
      language: '语言',
      download: '下载',
      workflow: '工作流',
      categories: '分类',
      templates: '模板',
      settings: '设置',
      arrange: '排列',
      profile: '我的',
      theme: '主题',
      createOrImportWorkflow: '创建新工作流或导入现有工作流',
      collapse: '收起',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
