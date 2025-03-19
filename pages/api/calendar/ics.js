import { google } from 'googleapis';
import { createEvents } from 'ics';

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
    // Get calendar ID from query or use default
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
    
    // Format events for ICS file
    const events = response.data.items.map(event => {
      const start = event.start.dateTime ? new Date(event.start.dateTime) : new Date(event.start.date);
      const end = event.end.dateTime ? new Date(event.end.dateTime) : new Date(event.end.date);
      
      return {
        title: event.summary,
        description: event.description || '',
        location: event.location || '',
        start: [
          start.getFullYear(),
          start.getMonth() + 1,
          start.getDate(),
          start.getHours(),
          start.getMinutes()
        ],
        end: [
          end.getFullYear(),
          end.getMonth() + 1,
          end.getDate(),
          end.getHours(),
          end.getMinutes()
        ],
        url: event.htmlLink,
      };
    });
    
    // Generate ICS file content
    createEvents(events, (error, value) => {
      if (error) {
        console.error('Error generating ICS file:', error);
        return res.status(500).json({ error: 'Failed to generate ICS file' });
      }
      
      // Set response headers for file download
      res.setHeader('Content-Type', 'text/calendar');
      res.setHeader('Content-Disposition', 'attachment; filename=soochow-choir-calendar.ics');
      
      res.status(200).send(value);
    });
  } catch (error) {
    console.error('Error generating ICS file:', error);
    
    // For development, create a simple ICS file with sample data
    const sampleEvents = [
      {
        title: 'Weekly Rehearsal',
        description: 'Regular weekly choir rehearsal.',
        location: 'Music Room 101',
        start: [2025, 3, 20, 19, 0],
        end: [2025, 3, 20, 21, 0],
      },
      {
        title: 'Spring Concert',
        description: 'Spring concert performance.',
        location: 'University Auditorium',
        start: [2025, 4, 15, 14, 0],
        end: [2025, 4, 15, 16, 0],
      },
      {
        title: 'Board Meeting',
        description: 'Monthly board meeting.',
        location: 'Meeting Room 305',
        start: [2025, 3, 25, 18, 0],
        end: [2025, 3, 25, 19, 0],
      },
    ];
    
    createEvents(sampleEvents, (error, value) => {
      if (error) {
        return res.status(500).json({ error: 'Failed to generate sample ICS file' });
      }
      
      res.setHeader('Content-Type', 'text/calendar');
      res.setHeader('Content-Disposition', 'attachment; filename=soochow-choir-calendar.ics');
      
      res.status(200).send(value);
    });
  }
}
