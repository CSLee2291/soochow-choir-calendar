import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'next-i18next';

const EventModal = ({ event, isOpen, onClose }) => {
  const { t } = useTranslation('common');

  // Add effect to prevent scrolling of background content when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="bg-accent text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">{event.title}</h2>
          <button 
            onClick={onClose}
            className="text-white hover:bg-purple-700 rounded-full p-1 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-medium text-gray-600">{t('date')}:</h3>
            <p>{event.start ? format(new Date(event.start), 'PPP') : t('dateNotAvailable')}</p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-600">{t('time')}:</h3>
            <p>
              {event.start && event.end ? (
                <>
                  {format(new Date(event.start), 'p')} - {format(new Date(event.end), 'p')}
                </>
              ) : (
                t('timeNotAvailable')
              )}
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
        
        {/* Modal Footer */}
        <div className="bg-gray-50 px-6 py-3 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-accent text-white rounded-md hover:bg-purple-700 transition-colors font-medium"
          >
            {t('goBack')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
