# Creative Showcase

## Overview

**Creative Showcase** is a full-stack web application developed as a **college academic project**.
The platform allows artists to upload and manage their artworks while enabling users to explore public galleries created by different artists.

The project demonstrates practical implementation of **frontend development, backend APIs, authentication, database integration, and cloud deployment**.

---

## Key Features

* User registration and login
* JWT-based authentication
* Artwork upload and display
* Personal artist dashboard
* Public artist profiles
* Explore public artworks
* Responsive user interface

---

## Technology Stack

**Frontend**

* React.js
* Axios
* React Router
* CSS

**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Token (JWT)
* Multer
* CORS

**Deployment**

* Frontend: Render (Static Site)
* Backend: Render (Web Service)
* Database: MongoDB Atlas

---

## Project Structure

```
Creative-Showcase/
├── backend/
│   ├── routes/
│   ├── models/
│   ├── uploads/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## Environment Variables

### Backend

```
PORT= 5000
MONGO_URI= mongodb+srv://showcase_user:Toufik07@show.bwehuav.mongodb.net/?appName=show
JWT_SECRET= creativeShowcaseSecretKey
```

### Frontend

```
REACT_APP_API_URL= https://assinment-1-creative-showcase-backend.onrender.com
```

---

## Running the Project Locally

```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm start
```

Application runs at:

```
http://localhost:3000
```

---

## Deployment

* Backend deployed on Render as a Node.js service
* Frontend deployed on Render as a static React application
* MongoDB Atlas used for cloud database storage

---

## Live Application

- Frontend: https://assinment-1-creative-showcase-frontend.onrender.com/
- Backend API: https://assinment-1-creative-showcase-backend.onrender.com

## Learning Outcomes

* Full-stack MERN application development
* REST API design and integration
* Authentication and authorization using JWT
* Cloud deployment and environment configuration

---

## Developer

**SK Toufik Islam**
B.Tech – Computer Science and Engineering (Data Science)
Brainware University

---

## Declaration

This project was developed as part of a **placement drive assignment** to demonstrate practical skills in full-stack web development, system design, and cloud deployment. 
The implementation reflects real-world development practices and is intended for technical evaluation.

---

