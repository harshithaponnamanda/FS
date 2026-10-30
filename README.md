# EventHub --- College Event Management System

EventHub is a beginner-friendly college event management application.
Students can explore upcoming campus events and register for them.
Organizers can create and manage events and view registrations.

## Technology Stack

### Frontend

-   HTML5
-   CSS3
-   JavaScript (ES6+)
-   React.js
-   Vite
-   Lucide React icons

### Backend and database

-   JSON Server --- dummy database for sample records and development
-   Node.js
-   Express.js
-   MongoDB with Mongoose --- optional persistent database backend

## Features

### Student side

-   View upcoming college events
-   Search events by title, description, venue, or organizer
-   Filter events by category
-   View event date, time, venue, organizer, and available seats
-   Register for an event using name, email, and department
-   Prevent duplicate registration with the same email for the same
    event

### Admin side

-   View event and registration statistics
-   Create new events
-   View existing events
-   Delete events
-   View recent student registrations

## Project Structure

``` text
EventHub_Project/
├── client/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── api.js
│       ├── App.jsx
│       ├── main.jsx
│       └── styles.css
├── json-server/
│   ├── db.json
│   └── package.json
├── server/
│   ├── .env.example
│   ├── package.json
│   └── src/
│       ├── index.js
│       └── models/
│           ├── Event.js
│           └── Registration.js
└── README.md
```

## Requirements

Install the following before running the project:

-   [Node.js](https://nodejs.org/) (includes npm)
-   Visual Studio Code or another code editor
-   A modern web browser

MongoDB is required only if you want to run the MongoDB backend. You can
use MongoDB Community Server locally or MongoDB Atlas.

## Installation and Setup

Extract the project ZIP file. Open the extracted `EventHub_Project`
folder in Visual Studio Code.

> Important: The project uses two separate development servers. Keep the
> JSON Server terminal and React terminal running at the same time.

### 1. Start the dummy database with JSON Server

Open the first VS Code terminal at the project root and run:

``` bash
cd json-server
npm install
npm run start
```

JSON Server starts at:

``` text
http://localhost:3001
```

Sample API endpoints:

  Method   Endpoint                                Purpose
  -------- --------------------------------------- -----------------------
  GET      `http://localhost:3001/events`          Get all events
  GET      `http://localhost:3001/registrations`   Get all registrations
  POST     `http://localhost:3001/events`          Create an event
  POST     `http://localhost:3001/registrations`   Register for an event
  DELETE   `http://localhost:3001/events/:id`      Delete an event

The sample records are stored in `json-server/db.json`. JSON Server
updates this file when records are created or deleted.

### 2. Start the React frontend

Open a second VS Code terminal. From the project root, run:

``` bash
cd client
npm install
npm run dev
```

Vite usually serves the website at:

``` text
http://localhost:5173
```

Open the URL printed in the terminal in your browser.

### 3. Run with MongoDB (optional)

The project also contains an Express API and MongoDB models.

1.  Start your local MongoDB service or create a MongoDB Atlas database.
2.  In the `server` folder, make a copy of `.env.example` and name it
    `.env`.
3.  Update the MongoDB connection string in `server/.env`.

Example for local MongoDB:

``` env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/eventhub
```

4.  Open a terminal at the project root and run:

``` bash
cd server
npm install
npm run dev
```

The backend API runs at:

``` text
http://localhost:5000
```

5.  Open `client/src/api.js` and change:

``` js
export const DATA_MODE = "json-server"
```

to:

``` js
export const DATA_MODE = "mongodb"
```

6.  Restart the React development server if it is already running.

**Database modes are alternatives:** JSON Server and MongoDB are
separate data sources. The frontend connects to one mode at a time. The
included `db.json` sample records are for JSON Server; they are not
automatically imported into MongoDB.

## Sample Data

The JSON Server database starts with:

-   6 sample college events
-   3 sample student registrations

The sample event categories include Workshop, Competition, Cultural,
Tech Talk, and Sports.

You can add more sample events through the Admin dashboard or by editing
`json-server/db.json`.

## How to Use the Application

1.  Start JSON Server.
2.  Start the React frontend.
3.  Open the website in your browser.
4.  Browse events on the Explore Events page.
5.  Use the search box or category filters to find events.
6.  Select Register on an event and submit the student details.
7.  Open the Admin page to create events and view registrations.

## Suggested Group Work Distribution

For a group of four members:

  Member     Responsibility
  ---------- ----------------------------------------------------------
  Member 1   React layout, navigation, homepage, and CSS
  Member 2   Event cards, event listing, search, and category filters
  Member 3   Student registration form and admin dashboard
  Member 4   JSON Server, Express APIs, MongoDB models, and testing

All group members should understand the overall application, API flow,
and database structure before the project demonstration.

## Future Enhancements

-   Student and admin login with role-based access
-   Edit and update existing events
-   Event poster image uploads
-   Registration confirmation email
-   Downloadable participant lists
-   QR-code-based event check-in
-   Registration cancellation
-   Pagination and improved validation

## Important Notes

-   This is an academic demonstration project and is not
    production-ready.
-   The Admin page currently has no authentication. Do not expose it
    publicly as a secure admin system.
-   The sample registration flow checks duplicate email addresses in the
    frontend. The MongoDB backend also checks for duplicate
    registrations.
-   For a real deployment, add authentication, server-side
    authorization, stronger validation, secure configuration, and
    production database safeguards.

## Author

Developed as a group full-stack project for a college event management
system.
