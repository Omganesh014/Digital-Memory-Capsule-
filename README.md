# Digital Memory Capsule

A starter skeleton for a web app where users store messages and media that unlock on a future date.

## Stack

- Frontend: React with Vite
- Backend: Node.js and Express
- Database: MySQL
- Auth: JWT and bcrypt
- Uploads: Multer
- Email: Nodemailer
- Scheduling: node-cron

## Setup

1. Copy `.env.example` to `.env` and update the values.
2. Create the database:

```bash
mysql -u root -p < database/schema.sql
```

3. Start the backend:

```bash
cd server
npm install
npm run dev
```

4. Start the frontend in a second terminal:

```bash
cd client
npm install
npm run dev
```

## Main Folders

- `client/`: React frontend.
- `server/`: Express API server.
- `database/`: MySQL schema.
- `server/uploads/`: Local media uploads during development.

## Current Status

This is a project skeleton. Routes, pages, middleware, schema, and utilities are in place, but the real database queries, authentication flow, encryption flow, and reminder processing still need to be implemented.
