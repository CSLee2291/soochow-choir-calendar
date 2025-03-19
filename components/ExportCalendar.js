import React from 'react';
import { useTranslation } from 'next-i18next';

const ExportCalendar = () => {
  const { t } = useTranslation('common');
  
  // Google Calendar subscription URL
  const googleCalendarUrl = 'https://calendar.google.com/calendar/u/0/r?cid=choir2@alumni.scu.edu.tw';
  
  // Generate .ics file URL for iOS and Outlook
  const icsFileUrl = '/api/calendar/ics';
  
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">{t('exportCalendar')}</h2>
      <div className="export-buttons">
        <a 
          href={googleCalendarUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="export-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
          </svg>
          {t('googleCalendar')}
        </a>
        
        <a 
          href={icsFileUrl} 
          download="soochow-choir-calendar.ics"
          className="export-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
          </svg>
          {t('outlookCalendar')}
        </a>
        
        <a 
          href={icsFileUrl} 
          download="soochow-choir-calendar.ics"
          className="export-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
          </svg>
          {t('iosCalendar')}
        </a>
      </div>
    </div>
  );
};

export default ExportCalendar;
