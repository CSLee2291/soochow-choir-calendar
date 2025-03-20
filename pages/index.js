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
  const [selectedTab, setSelectedTab] = useState(0);
  
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
    <div className="text-center max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6 w-full text-center text-accent">{t('calendar')}</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-gray-600">{t('loading')}</p>
        </div>
      ) : (
        <CalendarView events={events} />
      )}
      
      <ExportCalendar />
      
      <div className="mt-12">
        <div className="w-full mx-auto text-center mb-8">
          <div className="inline-flex border border-gray-300 rounded-lg overflow-hidden shadow-md mx-auto">
            <button
              onClick={() => setSelectedTab(0)}
              className={`${selectedTab === 0 
                ? 'bg-accent text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'} 
                py-4 px-10 text-lg font-medium transition-colors duration-200`}
            >
              {t('calendar')}
            </button>
            <button
              onClick={() => setSelectedTab(1)}
              className={`${selectedTab === 1 
                ? 'bg-accent text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'} 
                py-4 px-10 text-lg font-medium transition-colors duration-200`}
            >
              {t('howToUse')}
            </button>
          </div>
        </div>
        
        {selectedTab === 0 ? null : <HowToUse />}
      </div>
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
