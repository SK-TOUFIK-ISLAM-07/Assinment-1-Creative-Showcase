# Smart ToDo API

## Overview

Smart ToDo API is a RESTful backend application built using **Node.js, Express, and MongoDB** that provides secure and scalable task management functionality. The API enables users to register, authenticate, and manage their personal tasks through protected endpoints using **JWT-based authentication**.

The project demonstrates practical backend development concepts including **REST API design, authentication and authorization, database integration, middleware usage, and API testing with Postman**, following real-world development practices suitable for academic and placement evaluations.

---

## Key Features

* User registration and login
* JWT-based authentication
* Secure, protected routes
* Create, read, update, and delete (CRUD) tasks
* User-specific task management
* MongoDB database integration
* Centralized error handling
* Health check endpoint for API status

---

## Technology Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Token (JWT)
* bcrypt.js
* CORS
* dotenv

### API Testing & Documentation

* Postman (Collection-based API documentation)

---

## API Endpoints

### Authentication

* `POST /api/auth/register` – Register a new user
* `POST /api/auth/login` – Login and receive JWT token

### Tasks (Protected Routes)

* `POST /api/tasks` – Create a new task
* `GET /api/tasks` – Get all tasks for logged-in user
* `PUT /api/tasks/:id` – Update a task
* `DELETE /api/tasks/:id` – Delete a task

### Health Check

* `GET /` – Verify API is running

---

## Project Structure

```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── taskController.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
├── models/
│   ├── User.js
│   └── Task.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
├── server.js
├── package.json
├── package-lock.json
├── .env.example
├── Smart_ToDo_API.postman_collection.json
└── README.md
```

---

## Environment Variables

Create a `.env` file in the backend directory using the following format:

```env
PORT= 5000
MONGO_URI= mongodb+srv://todouser:Toufik07@todo-cluster.5blohhk.mongodb.net/todoDB?retryWrites=true&w=majority
JWT_SECRET= supersecretkey123
```
---

## Running the Project Locally

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The API will run at:

```
http://localhost:5000
```

---

## API Testing (Postman)

* A complete **Postman collection** is included in the repository:

  ```
  Smart_ToDo_API.postman_collection.json
  ```
* The collection demonstrates:

  * Authentication flow
  * JWT-protected CRUD operations
* The collection can be imported directly into Postman for testing and evaluation.

---

## Learning Outcomes

* RESTful API development using Express.js
* JWT-based authentication and authorization
* Secure password handling with bcrypt
* MongoDB schema design using Mongoose
* Middleware-based request handling
* Error handling and API validation
* Version control and GitHub workflow
* API documentation using Postman

---

## Developer

**SK Toufik Islam**
B.Tech – Computer Science and Engineering (Data Science)
Brainware University

---

## Declaration

This project was developed as part of a **placement drive assignment** to demonstrate backend development skills, REST API design, authentication mechanisms, and database integration. The implementation follows industry-relevant practices and is intended solely for **technical and academic evaluation purposes**.

---


