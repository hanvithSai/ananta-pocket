# Engineering Decisions

## Project Goal

Build a production-ready MERN application while maintaining clean architecture, scalability, and separation of concerns.

---

# Engineering Decision Log

## Decision 1: MongoDB Atlas

### Problem

Need a cloud-hosted database.

### Alternatives

* MySQL
* PostgreSQL
* MongoDB Atlas

### Selected

MongoDB Atlas

### Reason

* Free tier available
* Easy integration with Mongoose
* Flexible schema
* Cloud managed

### Tradeoffs

* Less relational support
* Possible data duplication

---

## Decision 2: Mongoose ODM

### Problem

Need database abstraction layer.

### Alternatives

* Native MongoDB Driver

### Selected

Mongoose

### Reason

* Schema validation
* Cleaner syntax
* Middleware support
* Better developer experience

---

## Decision 3: REST API

### Problem

Frontend needs backend communication.

### Alternatives

* REST
* GraphQL
* gRPC

### Selected

REST

### Reason

* Simple
* Industry standard
* Beginner friendly

---

## Decision 4: MVC Architecture

### Selected

MVC Pattern

### Benefits

* Separation of concerns
* Easier maintenance
* Improved scalability

---

## Decision 5: Zustand

### Problem

Need shared state between multiple React components.

### Alternatives

- useState
- Context API
- Redux Toolkit
- Zustand

### Selected

Zustand

### Reason

- Minimal boilerplate
- Easy learning curve
- Better developer experience
- Lightweight

### Tradeoffs

- Smaller ecosystem than Redux
- Fewer enterprise integrations

---

## Decision 6: Chakra UI

### Problem

Need responsive UI components.

### Alternatives

- Tailwind CSS
- Material UI
- Chakra UI

### Selected

Chakra UI

### Reason

- Fast development
- Built-in accessibility
- Responsive props
- Dark mode support

---

## Decision 7: React Router

### Problem

Need multiple pages.

### Selected

React Router DOM

### Benefits

- SPA navigation
- Client-side routing
- Better UX

---

## Decision 8: Optimistic UI Updates

### Problem

UI should immediately reflect changes.

### Selected

Local Store Updates

### Example

Create Product:

1. API Request Success
2. Zustand Store Updated
3. UI Automatically Updates

Benefit:

No manual refresh required.

---

## Decision 9: Single-Service Deployment

### Problem

Need to deploy both the frontend and backend applications.

### Alternatives

* Separate Deployments
* Single Deployment

### Selected

Single Deployment

### Reason

* Easier maintenance
* Single domain
* Simpler hosting
* Lower cost

---

## Decision 10: Render Hosting

### Alternatives

* Railway
* Vercel

### Selected

Render

### Reason

* Free Tier
* GitHub Integration
* Easy Deployment
* Automatic Builds

---

## Decision 11: Build Pipeline

### Problem

Need to install dependencies and build the frontend automatically during deployment.

### Selected

Custom Build Script

```json
{
  "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
}
```

Benefits:

* Fully automated deployment
* Reproducible builds
* CI/CD ready

---

## Decision 12: Production Environment Detection

### Problem

Need a reliable way to distinguish between development and production environments.

### Selected

Environment-based configuration using `NODE_ENV`.

Implementation:

```javascript
if (process.env.NODE_ENV === "production")
```

Purpose:

* Separate development and production logic
* Serve the React application only in production
* Enable environment-specific behavior

---

## Decision 13: Environment Variables

### Problem

Need a secure and flexible way to manage configuration across environments.

### Selected

Environment variables managed through `.env` files and deployment platform settings.

Used For:

* MongoDB URI
* Port Configuration
* API Keys
* Secrets

Benefits:

* Security
* Environment Separation
* Easier Deployment
* Better Configuration Management

---

## Decision 14: Cross-Platform Environment Variables with Cross-Env

### Problem

Environment variable commands behave differently across operating systems, especially between Windows and Unix-based systems.

### Selected

`cross-env`

Example:

```json
{
  "start": "cross-env NODE_ENV=production node server.js",
  "dev": "cross-env NODE_ENV=development nodemon server.js"
}
```

### Reason

* Works consistently across Windows, macOS, and Linux
* Eliminates OS-specific environment variable syntax
* Simplifies npm scripts
* Improves developer experience and portability

---

# Deployment Workflow

```text
Developer
    │
    ▼
Git Commit
    │
    ▼
GitHub Repository
    │
    ▼
Render Build
    │
    ▼
Install Dependencies
    │
    ▼
Build React App
    │
    ▼
Start Express Server
    │
    ▼
Live Application
```

---

# Production Considerations

Current:

* Free Render Instance
* MongoDB Atlas
* Cross-Platform Environment Configuration with Cross-Env

Future:

* Custom Domain
* HTTPS Enforcement
* Monitoring
* Error Tracking
* CI/CD Pipeline
* Docker Containers

---

# Error Handling Strategy

## Validation Errors

Status Code:

```http
400 Bad Request
```

When:

* Missing fields
* Invalid payload

---

## Resource Errors

Status Code:

```http
404 Not Found
```

When:

* Product does not exist
* Invalid ID

---

## Internal Errors

Status Code:

```http
500 Internal Server Error
```

When:

* Database failures
* Unhandled exceptions

---

# Coding Standards

## Naming Convention

### Files

```text
product.model.js
product.route.js
product.controller.js
```

### Variables

```javascript
productSchema
createProduct
updateProduct
```

---

# Security Considerations

Current:

* Environment Variables
* MongoDB Authentication

Future:

* JWT Authentication
* Password Hashing
* Rate Limiting
* Helmet Middleware
* CORS Restrictions

---

# Performance Considerations

Current:

* Lightweight CRUD operations

Future:

* Pagination
* Search Indexes
* Caching
* Compression