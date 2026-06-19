# System Architecture

## Overview

Ananta-Pocket follows a layered MERN architecture where the frontend communicates with a REST API, and the backend manages business logic and database operations.

```text
User
 │
 ▼
React Frontend
 │
 ▼
REST API (Express)
 │
 ▼
Controllers
 │
 ▼
Mongoose Models
 │
 ▼
MongoDB Atlas
```

---

# Application Flow

## Product Creation Flow

```text
User submits product form
        │
        ▼
React sends POST request
        │
        ▼
Express Route
        │
        ▼
Product Controller
        │
        ▼
Mongoose Validation
        │
        ▼
MongoDB Atlas
        │
        ▼
Success Response
        │
        ▼
UI Updates
```

---

# Backend Architecture

```text
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── product.controller.js
│
├── models/
│   └── product.model.js
│
├── routes/
│   └── product.route.js
│
└── server.js
```

---

# Architectural Decisions

## Why MVC?

MVC separates responsibilities.

### Models

Responsible for:

* Database schema
* Validation
* Database operations

### Controllers

Responsible for:

* Business logic
* Error handling
* Request processing

### Routes

Responsible for:

* Endpoint registration
* Mapping requests to controllers

Benefits:

* Clean codebase
* Easy debugging
* Better scalability
* Easier testing

---

# Request Lifecycle

1. Browser sends request.
2. Express receives request.
3. Route matches endpoint.
4. Controller executes business logic.
5. Mongoose performs database operation.
6. MongoDB returns result.
7. Controller sends response.
8. Frontend updates UI.

---

# Deployment Architecture

```text
Frontend (React)
        │
        ▼
Vercel
        │
        ▼
Backend API
        │
        ▼
Render 
        │
        ▼
MongoDB Atlas
```

#
