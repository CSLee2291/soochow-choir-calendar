# 東吳絃訟合唱團行事曆 (Soochow University String & Litigation Choir Calendar)

A Next.js web application that displays a calendar synced with Google Calendar for the Soochow University choir.

## Features

- View calendar events synced with Google Calendar (account: choir2@alumni.scu.edu.tw)
- Bilingual support (English and Traditional Chinese)
- Export calendar events to iOS, Google Calendar, or Outlook
- Detailed step-by-step instructions with visual guidance

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Google Cloud project with the Google Calendar API enabled
- A service account with access to the choir's Google Calendar

## Getting Started

1. Clone this repository to your local machine.

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Fill in your Google Calendar API credentials

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Google Calendar API Setup

To set up the Google Calendar API:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the Google Calendar API
4. Create a service account
5. Download the service account credentials as JSON
6. Share the target Google Calendar with the service account email
7. Add the service account credentials to your `.env.local` file

## Deployment

The application can be deployed to platforms like Vercel, Netlify, or any other hosting service that supports Next.js.

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
