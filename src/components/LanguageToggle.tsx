import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center space-x-2"
      aria-label="Toggle language"
    >
      <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {i18n.language.toUpperCase()}
      </span>
    </button>
  );
};

export default LanguageToggle;