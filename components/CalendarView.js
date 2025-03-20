import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useTranslation } from 'next-i18next';
import EventModal from './EventModal';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

const CalendarView = ({ events }) => {
  const { t, i18n } = useTranslation('common');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Adjust moment locale based on current language
  useEffect(() => {
    moment.locale(i18n.language);
  }, [i18n.language]);

  const handleSelectEvent = (event) => {
    if (!event) return;
    try {
      setSelectedEvent(event);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error opening event modal:', error);
    }
  };

  const closeModal = () => {
    try {
      setIsModalOpen(false);
      // Add a small delay before clearing the selected event to ensure smooth transition
      setTimeout(() => {
        setSelectedEvent(null);
      }, 300);
    } catch (error) {
      console.error('Error closing modal:', error);
    }
  };

  // Customize calendar messages based on language
  const calendarMessages = {
    allDay: i18n.language === 'zh' ? '全天' : 'All Day',
    previous: i18n.language === 'zh' ? '上一個' : 'Previous',
    next: i18n.language === 'zh' ? '下一個' : 'Next',
    today: i18n.language === 'zh' ? '今日' : 'Today',
    month: i18n.language === 'zh' ? '月' : 'Month',
    week: i18n.language === 'zh' ? '週' : 'Week',
    day: i18n.language === 'zh' ? '日' : 'Day',
    agenda: i18n.language === 'zh' ? '議程' : 'Agenda',
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        onSelectEvent={handleSelectEvent}
        messages={calendarMessages}
      />
      {isModalOpen && selectedEvent && (
        <EventModal event={selectedEvent} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};

export default CalendarView;
