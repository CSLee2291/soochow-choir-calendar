import { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import CalendarView from '../components/CalendarView';
import ExportCalendar from '../components/ExportCalendar';
import HowToUse from '../components/HowToUse';
import { fetchCalendarEvents } from '../utils/calendarHelpers';

export default function Home() {
  const { t } = useTranslation('common');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      
      // Set timeMin to now and timeMax to one year from now
      const timeMin = new Date().toISOString();
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
      const timeMax = oneYearFromNow.toISOString();
      
      const calendarEvents = await fetchCalendarEvents(timeMin, timeMax);
      setEvents(calendarEvents);
      setLoading(false);
    };
    
    loadEvents();
  }, []);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{t('calendar')}</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-gray-600">{t('loading')}</p>
        </div>
      ) : (
        <CalendarView events={events} />
      )}
      
      <ExportCalendar />
      <HowToUse />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
