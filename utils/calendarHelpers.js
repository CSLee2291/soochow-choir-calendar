import axios from 'axios';
import { format, parseISO } from 'date-fns';

/**
 * Fetch calendar events from the API
 * @param {string} timeMin - Start time in ISO format
 * @param {string} timeMax - End time in ISO format
 * @returns {Promise<Array>} - Promise resolving to events array
 */
export const fetchCalendarEvents = async (timeMin, timeMax) => {
  try {
    const response = await axios.get('/api/calendar/events', {
      params: {
        timeMin,
        timeMax,
      },
    });
    
    return response.data.map(event => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return [];
  }
};

/**
 * Format date for display
 * @param {Date|string} date - Date to format
 * @param {string} locale - Locale to use for formatting
 * @returns {string} - Formatted date string
 */
export const formatEventDate = (date, locale = 'en') => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  const formatString = locale === 'zh' ? 'yyyy年MM月dd日' : 'MMMM dd, yyyy';
  return format(dateObj, formatString);
};

/**
 * Format time for display
 * @param {Date|string} date - Date to format
 * @param {string} locale - Locale to use for formatting
 * @returns {string} - Formatted time string
 */
export const formatEventTime = (date, locale = 'en') => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  const formatString = locale === 'zh' ? 'HH:mm' : 'h:mm a';
  return format(dateObj, formatString);
};
