import { google } from 'googleapis';

// Set up Google Calendar API credentials
const getGoogleAuth = () => {
  const auth = new google.auth.GoogleAuth({
    // In production, these would be set as environment variables
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  });
  
  return auth;
};

export default async function handler(req, res) {
  try {
    // Get calendar ID from the request query or use default
    const calendarId = req.query.calendarId || 'choir2@alumni.scu.edu.tw';
    
    // Get timeMin and timeMax from query parameters or use defaults
    const timeMin = req.query.timeMin || new Date().toISOString();
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    const timeMax = req.query.timeMax || oneYearFromNow.toISOString();
    
    // Get Google auth client
    const auth = await getGoogleAuth();
    const calendar = google.calendar({ version: 'v3', auth });
    
    // Fetch events from Google Calendar
    const response = await calendar.events.list({
      calendarId,
      timeMin,
      timeMax,
      singleEvents: true,
      orderBy: 'startTime',
    });
    
    // Format events for our frontend
    const events = response.data.items.map(event => {
      const start = event.start.dateTime || event.start.date;
      const end = event.end.dateTime || event.end.date;
      
      return {
        id: event.id,
        title: event.summary,
        start: new Date(start),
        end: new Date(end),
        description: event.description || '',
        location: event.location || '',
        htmlLink: event.htmlLink,
      };
    });
    
    // Return the events as JSON
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    
    // For now, return sample data for development
    const sampleEvents = [
      {
        id: '1',
        title: 'Weekly Rehearsal',
        start: new Date(2025, 2, 20, 19, 0),
        end: new Date(2025, 2, 20, 21, 0),
        description: 'Regular weekly choir rehearsal.',
        location: 'Music Room 101',
      },
      {
        id: '2',
        title: 'Spring Concert',
        start: new Date(2025, 3, 15, 14, 0),
        end: new Date(2025, 3, 15, 16, 0),
        description: 'Spring concert performance.',
        location: 'University Auditorium',
      },
      {
        id: '3',
        title: 'Board Meeting',
        start: new Date(2025, 2, 25, 18, 0),
        end: new Date(2025, 2, 25, 19, 0),
        description: 'Monthly board meeting.',
        location: 'Meeting Room 305',
      },
    ];
    
    res.status(200).json(sampleEvents);
  }
}
