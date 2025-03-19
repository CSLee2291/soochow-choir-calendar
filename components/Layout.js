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
      </Head>

      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-accent mb-4 md:mb-0">{t('title')}</h1>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="container mx-auto p-4">
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
