# Jobster API

A full-featured **Job Tracking API** built with Node.js and Express. This API powers the backend of a job tracking application where users can register, log in, and manage job applications. It includes authentication, user role-based access, job CRUD operations, and deployment to Render.

## Live Demo

[https://temp-jobster-api-2wgr.onrender.com/landing](https://temp-jobster-api-2wgr.onrender.com/landing)

---

## Features

* **User Authentication** (Register, Login, Logout)
* **JWT Authorization** with Refresh Tokens
* **Job Management**: Create, Read, Update, Delete job entries
* **User Management**: Update profile, change password
* **Middleware** for authentication and error handling
* **Deployment** to Render

---

## Tech Stack

* Node.js
* Express.js
* MongoDB with Mongoose
* dotenv
* bcryptjs
* jsonwebtoken
* cookie-parser
* CORS

---

## Setup Instructions

### 1. Clone Repository & Install Dependencies

```bash
npm install
```

### 2. Create `.env` File

Create a `.env` file at the root level with the following variables:

```env
PORT=5100
MONGO_URL=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret>
JWT_LIFETIME=1d
JWT_REFRESH_SECRET=<your_refresh_secret>
JWT_REFRESH_LIFETIME=30d
ORIGIN=http://localhost:5173
```

