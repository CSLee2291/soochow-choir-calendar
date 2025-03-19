import React from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'next-i18next';

const EventModal = ({ event, isOpen, onClose }) => {
  const { t } = useTranslation('common');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-accent">{event.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-600">{t('date')}:</h3>
            <p>{format(new Date(event.start), 'PPP')}</p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-600">{t('time')}:</h3>
            <p>
              {format(new Date(event.start), 'p')} - {format(new Date(event.end), 'p')}
            </p>
          </div>
          
          {event.location && (
            <div>
              <h3 className="font-medium text-gray-600">{t('location')}:</h3>
              <p>{event.location}</p>
            </div>
          )}
          
          {event.description && (
            <div>
              <h3 className="font-medium text-gray-600">{t('description')}:</h3>
              <p className="whitespace-pre-line">{event.description}</p>
            </div>
          )}
        </div>
        
        <div className="mt-6 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-accent text-white rounded hover:bg-purple-700 transition-colors"
          >
            {t('goBack')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
