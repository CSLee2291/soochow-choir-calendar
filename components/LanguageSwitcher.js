import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  
  const { pathname, asPath, query } = router;
  const currentLocale = router.locale;

  const changeLanguage = (locale) => {
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <div className="language-switcher">
      <button
        className={`language-button ${currentLocale === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
      <button
        className={`language-button ${currentLocale === 'zh' ? 'active' : ''}`}
        onClick={() => changeLanguage('zh')}
      >
        中文
      </button>
    </div>
  );
};

export default LanguageSwitcher;
