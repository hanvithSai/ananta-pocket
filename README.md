
# Ananta-Pocket

A Full Stack application built using MongoDB, Express.js, React.js, and Node.js **[MERN]**.

## Overview

Ananta-Pocket is a modern web application designed to manage and organize product data through a responsive and scalable architecture. The project follows industry-standard backend and frontend separation, RESTful API design principles, and MongoDB-based document storage.

The application demonstrates:

* Full CRUD Operations
* REST API Development
* MongoDB Atlas Integration
* React Frontend Development
* Express Backend Architecture
* Mongoose Data Modeling
* Environment Variable Management
* Modular Project Structure
* Deployment Ready Configuration

---

## Tech Stack

### Frontend

* React.js
* Vite
* Axios
* React Router
* CSS / Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* Nodemon

---

## Features

### Product Functions

* Create Product
* View Products
* Update Product
* Delete Product

### User Experience

* Responsive Design
* Light/Dark Mode
* Real-time UI Updates

### Backend Features

* RESTful APIs
* Input Validation
* Error Handling
* MongoDB Integration
* Modular Routing

---

## Project Structure

```text
Ananta-Pocket
│
├── frontend
│   ├── src
│   ├── pages
│   ├── components
│   └── store
│
├── backend
│   ├── config
│   ├── models
│   ├── routes
│   ├── controllers
│   └── server.js
│
├── docs
│   ├── engineering.md
│   ├── learning.md
│   ├── architecture.md
│   ├── api-reference.md
│   └── database.md
│
├── README.md
├── .env.example
├── .gitignore
├── package-lock.json
└── package.json
```

---

## System Flow

1. User performs an action from React UI.
2. Request is sent to Express API.
3. Controller processes request.
4. Mongoose communicates with MongoDB.
5. Database returns response.
6. API sends response back.
7. React updates UI.

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

## Environment Variables

```env
MONGO_URI=<mongodb_connection_string>
PORT=5000
```

---

## API Endpoints

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | /api/products     | Get all products |
| POST   | /api/products     | Create product   |
| PUT    | /api/products/:id | Update product   |
| DELETE | /api/products/:id | Delete product   |

---

## Future Enhancements

* Authentication & Authorization
* JWT Security
* Image Upload Storage
* Search & Filtering
* Pagination
* Wishlist
* Payments
* Admin Dashboard

---

## Learning Outcomes

This project helped understand:

* REST API Design
* MongoDB Data Modeling
* Express Routing
* Mongoose ODM
* Frontend-Backend Communication
* CRUD Operations
* Production Deployment
* Full Stack Development Workflow

```
```
