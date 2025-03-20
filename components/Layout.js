import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Layout = ({ children }) => {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen">
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('title')} />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <header className="relative w-full bg-gradient-to-b from-white to-gray-50 shadow-md py-8">
        <h1 className="site-title text-3xl font-bold text-accent">{t('title')}</h1>
        <div className="lang-switcher-container">
          <LanguageSwitcher />
        </div>
      </header>

      <main className="container mx-auto p-4 max-w-6xl">
        {children}
      </main>

      <footer className="bg-gray-100 mt-8 py-6">
        <div className="container mx-auto p-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} {t('title')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
