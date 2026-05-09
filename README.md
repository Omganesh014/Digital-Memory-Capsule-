# Digital Memory Capsule

Digital Memory Capsule System is a secure web platform for storing messages, photos, and videos that remain locked until a future date. It includes planned support for countdown timers, AES-256 encryption, email reminders, and friend or family sharing.

## Stack

- Frontend: React with Vite
- Backend: Node.js and Express
- Database: MySQL
- Auth: JWT and bcrypt
- Uploads: Multer
- Email: Nodemailer
- Scheduling: node-cron

## Setup

1. Update values in `.env`.
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
