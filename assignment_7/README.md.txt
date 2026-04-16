# Student Feedback System (Assignment 7)

A full-stack MERN application with role-based access control (RBAC).

## 🚀 Setup Instructions

### 1. Backend
- **Path:** `cd backend`
- **Install:** `npm install`
- **Env:** Create `.env` file with `PORT`, `MONGO_URI`, and `JWT_SECRET`.
- **Start:** `node server.js`

### 2. Frontend
- **Path:** `cd frontend`
- **Install:** `npm install`
- **Start:** `npm start`

## 🛠 Features
- **Authentication:** Secure Login/Signup using JWT and bcrypt.
- **Role-Based Access:** - **Students:** Can submit course feedback.
  - **Teachers:** Can view all received feedback.
- **Protected Routes:** Unauthorized users are redirected to the login page.
- **Database:** MongoDB for persistent storage of users and feedback.

## 📁 Project Structure
- `backend/`: Express server, MongoDB models, and authentication routes.
- `frontend/`: React components, dashboards, and client-side routing.