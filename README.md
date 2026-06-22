# Ananta-Pocket

A Full Stack MERN application for product management, built using MongoDB, Express.js, React.js, Node.js, Zustand, Chakra UI, and deployed on Render.

---

## Live Demo

**Application URL**

```text
https://ananta-pocket.onrender.com
```

---

## Overview

Ananta-Pocket is a modern full-stack CRUD application designed to manage product data through a scalable MERN architecture.

The project demonstrates industry-standard software engineering practices including:

* REST API Development
* MongoDB Atlas Integration
* React SPA Architecture
* Zustand State Management
* Chakra UI Component System
* Responsive Design
* Environment-Based Configuration
* Production Deployment
* Single-Service Hosting Architecture

---

## Features

### Product Features

* Create Products
* View Products
* Update Products
* Delete Products

### User Experience

* Responsive Layout
* Dark Mode / Light Mode
* Toast Notifications
* Real-Time UI Updates
* Modal-Based Editing

### Engineering Features

* RESTful API Design
* Zustand Global State Management
* MongoDB Atlas Database
* MVC Backend Architecture
* Environment Variables
* Production Build Pipeline
* Single Deployment Architecture

---

## Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Zustand
* Chakra UI
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* Nodemon
* Cross-Env

### Deployment

* Render
* GitHub
* MongoDB Atlas

---

## Architecture

```text
User
 │
 ▼
React Frontend
 │
 ▼
Zustand Store
 │
 ▼
Express REST API
 │
 ▼
Mongoose ODM
 │
 ▼
MongoDB Atlas
```

---

## Production Architecture

```text
User
 │
 ▼
https://ananta-pocket.onrender.com
 │
 ▼
Express Server
 │
 ├── REST API
 │
 └── React Static Assets
 │
 ▼
MongoDB Atlas
```

The application uses a Single-Service Deployment model where Express serves both the frontend and backend under the same domain.

---

## Project Structure

```text
Ananta-Pocket
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── store
│   └── assets
│
├── backend
│   ├── config
│   ├── models
│   ├── controllers
│   ├── routes
│   └── server.js
│
├── docs
│   ├── architecture.md
│   ├── engineering.md
│   ├── learning.md
│   ├── api-reference.md
│   └── database.md
│
├── .env.example
├── package.json
└── README.md
```

---

## Application Flow

```text
User Action
      │
      ▼
React Component
      │
      ▼
Zustand Store
      │
      ▼
Express API
      │
      ▼
MongoDB Atlas
      │
      ▼
Response Returned
      │
      ▼
UI Re-rendered
```

---

## Database Design

### Products Collection

```json
{
  "_id": "ObjectId",
  "name": "Product Name",
  "price": 999,
  "image": "image-url",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

---

## API Endpoints

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | /api/products     | Get All Products |
| POST   | /api/products     | Create Product   |
| PUT    | /api/products/:id | Update Product   |
| DELETE | /api/products/:id | Delete Product   |

---

## Environment Variables

Create a `.env` file:

```env
MONGO_URI=<mongodb_connection_string>
PORT=5000
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/hanvithSai/ananta-pocket.git
cd Ananta-Pocket
```

### Install Dependencies

```bash
npm install
npm install --prefix frontend
```

### Run Development Server

```bash
npm run dev
```

---

## Production Commands

### Build Application

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

---

## Documentation

Detailed project documentation is available in:

```text
docs/
├── architecture.md
├── engineering.md
├── learning.md
├── api-reference.md
└── database.md
```

---

## Learning Outcomes

This project helped understand:

* MERN Stack Development
* React Routing
* Zustand State Management
* CRUD Operations
* REST APIs
* MongoDB Atlas
* Mongoose ODM
* Chakra UI
* Production Deployment
* Render Hosting
* Git & GitHub Workflow
* Environment Variables
* Build Pipelines
* Single-Service Architecture

---

## Future Enhancements

* Authentication & Authorization
* JWT Security
* Cloudinary Image Uploads
* Search & Filtering
* Pagination
* Product Categories
* Wishlist System
* Admin Dashboard
* Docker Containerization
* CI/CD Pipeline

