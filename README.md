# 🔒 Digital Memory Capsule System
### Structured Enquiry Question (SEQ) — Project Plan

> A web-based platform where users store messages, images, videos, or letters that remain locked until a chosen future date.

---

## 📋 Table of Contents

- [Problem Statement](#problem-statement)
- [Proposed Solution](#proposed-solution)
- [Unique Features](#unique-features)
- [Technology Stack](#technology-stack)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Project Phases](#project-phases)
- [Folder Structure](#folder-structure)
- [Team Roles](#team-roles)
- [Deployment](#deployment)

---

## Problem Statement

People often want to preserve memories, messages, photos, or videos for future dates, but there is no secure and organized platform to create "future digital capsules" that open automatically at a specific time.

---

## Proposed Solution

Develop a web-based Digital Memory Capsule platform where users can store messages, images, videos, or letters that remain **locked until a chosen future date**. The platform automatically unlocks capsules on their scheduled date and notifies recipients via email.

---

## Unique Features

| Feature | Description |
|---|---|
| 🗓️ Future Date Unlock System | Capsules are locked until the specified unlock date |
| 🔐 Encrypted Digital Storage | Content is encrypted at rest using AES-256 |
| 📸 Video/Photo Upload | Supports image and video file uploads |
| 📧 Email Reminder Notification | Automated emails sent before and on unlock date |
| 🌐 Private/Public Capsules | Choose who can view your capsule |
| ⏳ Countdown Timer | Live countdown displayed until unlock |
| 👨‍👩‍👧 Friend/Family Sharing | Invite others to view capsules via share link |

---

## Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | **React.js** | Component-based UI, routing, state management |
| Styling | **HTML + CSS** | Responsive layout, animations, themes |
| Backend | **Node.js + Express** | REST API server, business logic |
| Database | **MySQL** | Persistent data storage |
| Auth | **JWT + bcrypt** | Secure login, password hashing |
| Encryption | **Node crypto (AES-256)** | Encrypt capsule content at rest |
| File Upload | **Multer** | Handle image/video uploads |
| Email | **Nodemailer** | Send reminder and notification emails |
| Scheduling | **node-cron** | Scheduled jobs for email reminders |

---

## Database Schema

### `users`
```sql
CREATE TABLE users (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  email       VARCHAR(150) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### `capsules`
```sql
CREATE TABLE capsules (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  user_id      INT NOT NULL,
  title        VARCHAR(200),
  message      TEXT,
  unlock_date  DATETIME NOT NULL,
  is_public    BOOLEAN DEFAULT FALSE,
  is_encrypted BOOLEAN DEFAULT TRUE,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### `capsule_media`
```sql
CREATE TABLE capsule_media (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  capsule_id  INT NOT NULL,
  file_path   VARCHAR(300),
  file_type   ENUM('image', 'video') NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (capsule_id) REFERENCES capsules(id) ON DELETE CASCADE
);
```

### `capsule_recipients`
```sql
CREATE TABLE capsule_recipients (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  capsule_id   INT NOT NULL,
  email        VARCHAR(150) NOT NULL,
  share_token  VARCHAR(100) UNIQUE,
  invited_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (capsule_id) REFERENCES capsules(id) ON DELETE CASCADE
);
```

### `reminders`
```sql
CREATE TABLE reminders (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  capsule_id  INT NOT NULL,
  remind_at   DATETIME NOT NULL,
  sent        BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (capsule_id) REFERENCES capsules(id) ON DELETE CASCADE
);
```

---

## API Endpoints

### Auth
| Method | Route | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |
| POST | `/api/auth/logout` | Logout user |

### Capsules
| Method | Route | Description |
|---|---|---|
| GET | `/api/capsules` | Get all capsules for logged-in user |
| POST | `/api/capsules` | Create a new capsule |
| GET | `/api/capsules/:id` | Get capsule (locked/unlocked based on date) |
| DELETE | `/api/capsules/:id` | Delete a capsule |
| POST | `/api/capsules/:id/share` | Generate share link for capsule |

### Media
| Method | Route | Description |
|---|---|---|
| POST | `/api/capsules/:id/media` | Upload photo or video to a capsule |
| DELETE | `/api/media/:id` | Delete a media file |

### Reminders
| Method | Route | Description |
|---|---|---|
| POST | `/api/reminders` | Set an email reminder for a capsule |
| GET | `/api/reminders` | Get all reminders for a user |

---

## Project Phases

### Phase 1 — Planning & Design (Week 1)
- [ ] Define user stories and requirements
- [ ] Design database schema (MySQL)
- [ ] Create UI/UX wireframes for all pages
- [ ] Define REST API endpoints
- [ ] Set up project repository and folder structure

### Phase 2 — Backend Core Setup (Week 2)
- [ ] Initialize Node.js + Express server
- [ ] Configure MySQL database connection (mysql2 + connection pooling)
- [ ] Build user authentication (JWT + bcrypt)
- [ ] Implement capsule CRUD APIs
- [ ] Implement future date lock middleware

### Phase 3 — Backend Advanced Features (Week 3)
- [ ] File upload system using Multer
- [ ] AES-256 encryption for locked capsule content
- [ ] Email reminder system using Nodemailer + node-cron
- [ ] Friend/family sharing and invite system
- [ ] Public/private capsule toggle

### Phase 4 — Frontend Setup & Auth (Week 4)
- [ ] Initialize React app with React Router v6
- [ ] Build Login and Register pages
- [ ] Implement protected routes using React Context API
- [ ] Build dashboard with capsule status cards (locked/unlocked)
- [ ] Set up responsive CSS layout

### Phase 5 — Frontend Features & UI (Week 5)
- [ ] Create Capsule page (rich text editor, date picker, file upload)
- [ ] Countdown timer component (`useCountdown` custom hook)
- [ ] Capsule view page (locked/unlocked states with animations)
- [ ] Share and invite UI
- [ ] Profile and settings page

### Phase 6 — Testing, Polish & Deployment (Week 6)
- [ ] API testing with Postman / Jest
- [ ] Frontend integration and bug fixing
- [ ] UI polish (loading skeletons, empty states, animations)
- [ ] Deploy to hosting platform
- [ ] Final documentation and presentation preparation

---

## Folder Structure

```
digital-memory-capsule/
├── client/                   # React.js frontend
│   ├── public/
│   └── src/
│       ├── components/       # Reusable UI components
│       │   ├── CapsuleCard.jsx
│       │   ├── CountdownTimer.jsx
│       │   └── FileUpload.jsx
│       ├── pages/            # Page components
│       │   ├── Dashboard.jsx
│       │   ├── CreateCapsule.jsx
│       │   ├── ViewCapsule.jsx
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   └── Profile.jsx
│       ├── context/          # React Context (auth state)
│       ├── hooks/            # Custom hooks (useCountdown, useAuth)
│       ├── services/         # Axios API call functions
│       └── App.jsx
│
├── server/                   # Node.js + Express backend
│   ├── config/
│   │   └── db.js             # MySQL connection setup
│   ├── controllers/          # Route handler logic
│   │   ├── authController.js
│   │   ├── capsuleController.js
│   │   └── mediaController.js
│   ├── middleware/
│   │   ├── authMiddleware.js  # JWT verification
│   │   └── lockMiddleware.js  # Date-lock check
│   ├── routes/               # Express route definitions
│   ├── utils/
│   │   ├── encryption.js     # AES-256 encrypt/decrypt
│   │   └── emailService.js   # Nodemailer setup
│   ├── uploads/              # Stored media files
│   ├── cron/
│   │   └── reminderJob.js    # node-cron reminder scheduler
│   └── server.js             # Entry point
│
├── database/
│   └── schema.sql            # MySQL schema migration file
│
├── .env                      # Environment variables (never commit!)
├── .gitignore
└── README.md
```

---

## Team Roles

| Person | Responsibility |
|---|---|
| Person 1 | MySQL schema design + Node.js backend CRUD routes |
| Person 2 | Auth system (JWT/bcrypt) + email reminders (Nodemailer) |
| Person 3 | React frontend + HTML/CSS layout and styling |
| Person 4 | File upload, encryption, testing and deployment |

---

## Deployment

| Component | Recommended Platform |
|---|---|
| Frontend (React) | Vercel or Netlify (free tier) |
| Backend (Node.js) | Render or Railway (free tier) |
| Database (MySQL) | PlanetScale or Aiven (free tier) |
| File Storage | Local `/uploads` folder or AWS S3 |

### Environment Variables (`.env`)
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=memory_capsule
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your@email.com
EMAIL_PASS=your_email_password
ENCRYPTION_KEY=32_char_secret_key_here
```

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourname/digital-memory-capsule.git
cd digital-memory-capsule
```

### 2. Set up the database
```bash
mysql -u root -p < database/schema.sql
```

### 3. Start the backend
```bash
cd server
npm install
npm run dev
```

### 4. Start the frontend
```bash
cd client
npm install
npm start
```

---

*Digital Memory Capsule System — SEQ Project | Built with HTML, CSS, JavaScript, React.js, Node.js & MySQL*
