import React from 'react';
import { useTranslation } from 'next-i18next';

const ExportCalendar = () => {
  const { t } = useTranslation('common');
  
  // Google Calendar subscription URL
  const googleCalendarUrl = 'https://calendar.google.com/calendar/u/0/r?cid=choir2@alumni.scu.edu.tw';
  
  // Generate .ics file URL for iOS and Outlook
  const icsFileUrl = '/api/calendar/ics';
  
  return (
    <div className="my-12 text-center w-full bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-8 w-full text-center text-accent">{t('exportCalendar')}</h2>
      <div className="export-buttons flex flex-wrap justify-center gap-8">
        <a 
          href={googleCalendarUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="export-button bg-accent hover:bg-purple-800 text-white py-4 px-6 rounded-lg shadow-md transition-colors duration-300"
        >
          <div className="flex flex-col items-center w-32 h-32 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-3" viewBox="0 0 448 512" fill="currentColor">
              <path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6zm-52-244v72c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-72c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12z"/>
            </svg>
            <span className="text-base">{t('googleCalendar')}</span>
          </div>
        </a>
        
        <a 
          href={icsFileUrl} 
          download="soochow-choir-calendar.ics"
          className="export-button bg-accent hover:bg-purple-800 text-white py-4 px-6 rounded-lg shadow-md transition-colors duration-300"
        >
          <div className="flex flex-col items-center w-32 h-32 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-3" viewBox="0 0 512 512" fill="currentColor">
              <path d="M464 128H272V48c0-26.5-21.5-48-48-48h-48C149.5 0 128 21.5 128 48v80H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM176 48h48v80h-48V48zm0 448H48V176h128v320zm288 0H224V176h240v320zm-48-160h-80v-48h80v48zm0 64h-80v-48h80v48z"/>
            </svg>
            <span className="text-base">{t('outlookCalendar')}</span>
          </div>
        </a>
        
        <a 
          href={icsFileUrl} 
          download="soochow-choir-calendar.ics"
          className="export-button bg-accent hover:bg-purple-800 text-white py-4 px-6 rounded-lg shadow-md transition-colors duration-300"
        >
          <div className="flex flex-col items-center w-32 h-32 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-3" viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <span className="text-base">{t('iosCalendar')}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ExportCalendar;
