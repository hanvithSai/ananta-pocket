# Learning Notes

## What is MERN?

MERN stands for:

* MongoDB
* Express.js
* React.js
* Node.js

It is a JavaScript-based full-stack development ecosystem where JavaScript is used across both frontend and backend development.

---

## What is Node.js?

Node.js is a JavaScript runtime environment that allows JavaScript code to run outside the browser.

Responsibilities:

* Running backend applications
* Handling HTTP requests
* Interacting with databases
* Managing server-side logic
* Executing JavaScript on the server

Example:

```javascript
console.log("Hello from Node.js");
```

---

## What is an API?

API (Application Programming Interface) enables communication between software systems.

### Real World Example

Restaurant Flow:

```text
Customer → Waiter → Kitchen → Waiter → Customer
```

The API acts like the waiter, carrying requests and responses between the client and the server.

---

## What is REST?

REST (Representational State Transfer) is an architectural style for designing APIs.

### CRUD Mapping

| Operation | HTTP Method |
| --------- | ----------- |
| Create    | POST        |
| Read      | GET         |
| Update    | PUT/PATCH   |
| Delete    | DELETE      |

---

## Major HTTP Status Codes

### 2xx Success

| Code | Meaning                                   |
| ---- | ----------------------------------------- |
| 200  | OK – Request successful                   |
| 201  | Created – Resource successfully created   |
| 204  | No Content – Success but no response body |

### 4xx Client Errors

| Code | Meaning                                             |
| ---- | --------------------------------------------------- |
| 400  | Bad Request – Invalid request data                  |
| 401  | Unauthorized – Authentication required              |
| 403  | Forbidden – Access denied                           |
| 404  | Not Found – Resource does not exist                 |
| 409  | Conflict – Resource conflict (e.g., duplicate data) |
| 422  | Unprocessable Entity – Validation failed            |

### 5xx Server Errors

| Code | Meaning                                              |
| ---- | ---------------------------------------------------- |
| 500  | Internal Server Error – Unexpected server failure    |
| 502  | Bad Gateway – Invalid response from upstream server  |
| 503  | Service Unavailable – Server temporarily unavailable |

---

## What is MongoDB?

MongoDB is a NoSQL document database.

It stores data as documents:

```json
{
  "name": "Watch",
  "price": 1000
}
```

instead of traditional rows and columns.

---

## SQL vs NoSQL

### SQL

Examples:

* MySQL
* PostgreSQL

Structure:

```text
Tables
Rows
Columns
```

Best For:

* Banking Systems
* ERP Applications
* Transaction-heavy Systems

---

### NoSQL

Examples:

* MongoDB

Structure:

```text
Collections
Documents
```

Best For:

* Startups
* Rapid Development
* Flexible Data Models

---

## What is a Collection?

A collection in MongoDB is equivalent to a table in SQL databases.

Example:

Products Collection

```text
Products
├── Product 1
├── Product 2
├── Product 3
```

---

## What is a Document?

A document in MongoDB is equivalent to a row in SQL databases.

Example:

```json
{
  "name": "Headphones",
  "price": 999
}
```

---

## What is Mongoose?

Mongoose is an ODM (Object Document Mapper) for MongoDB.

Responsibilities:

* Schema Definition
* Validation
* Query Building
* Model Creation
* Middleware Support

Benefits:

* Structured Data Modeling
* Built-in Validation
* Cleaner Database Operations

---

## What is a Schema?

A schema is the blueprint of a MongoDB document.

Example:

```javascript
{
  name: String,
  price: Number
}
```

It defines:

* Fields
* Data Types
* Validation Rules
* Default Values

---

## What is a Model?

A model is an interface used to interact with a MongoDB collection.

Example:

```javascript
Product.find();
Product.create();
Product.deleteOne();
```

Common Operations:

* Create Documents
* Read Documents
* Update Documents
* Delete Documents

---

## What is Middleware?

Middleware is a function executed before the request reaches the controller.

Example:

```javascript
app.use(express.json());
```

Purpose:

* Parse JSON Data
* Authentication
* Authorization
* Logging
* Validation
* Error Handling

---

## What is dotenv?

`dotenv` is a package used to load environment variables from a `.env` file into `process.env`.

Installation:

```bash
npm install dotenv
```

Usage:

```javascript
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGO_URI);
```

Example `.env` File:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net
PORT=5000
```

Benefits:

* Keeps sensitive information secure
* Separates configuration from code
* Makes deployment easier
* Supports different environments

---

## Why Use Environment Variables?

Environment variables help avoid exposing sensitive information directly in source code.

Bad:

```javascript
const password = "mypassword";
```

Good:

```env
MONGO_URI=your_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Common Environment Variables:

* MONGO_URI
* PORT
* JWT_SECRET
* API_KEYS

---

## Node vs Nodemon

### Node

Node executes the application once.

Example:

```bash
node server.js
```

Behavior:

* Starts the server
* Does not automatically restart when files change
* Requires manual restart after code updates

---

### Nodemon

Nodemon is a development tool that automatically restarts the server whenever file changes are detected.

Installation:

```bash
npm install --save-dev nodemon
```

Example:

```bash
nodemon server.js
```

Behavior:

* Watches project files
* Automatically restarts the server
* Improves development productivity

---

### Difference Between Node and Nodemon

| Feature                      | Node | Nodemon |
| ---------------------------- | ---- | ------- |
| Runs JavaScript              | ✅    | ✅       |
| Auto Restart on File Changes | ❌    | ✅       |
| Suitable for Production      | ✅    | ❌       |
| Suitable for Development     | ✅    | ✅       |

---

## package.json Scripts

The `scripts` section in `package.json` helps simplify command execution.

Example:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

### start Script

```bash
npm start
```

Equivalent to:

```bash
node server.js
```

Used mainly for:

* Production environments
* Deployment platforms

---

### dev Script

```bash
npm run dev
```

Equivalent to:

```bash
nodemon server.js
```

Used mainly for:

* Local development
* Automatic server restarts

---

## Common Edge Cases

### Create Product

Edge Cases:

* Missing Name
* Missing Price
* Empty Image URL
* Invalid Data Types

Common Responses:

* `201 Created` → Product created successfully
* `400 Bad Request` → Missing or invalid fields
* `500 Internal Server Error` → Server failure

---

### Update Product

Edge Cases:

* Invalid ObjectId
* Product Not Found
* Empty Update Payload

Common Responses:

* `200 OK` → Product updated successfully
* `400 Bad Request` → Invalid data
* `404 Not Found` → Product does not exist
* `500 Internal Server Error` → Server failure

---

### Delete Product

Edge Cases:

* Product Already Deleted
* Invalid Product ID

Common Responses:

* `200 OK` → Product deleted successfully
* `404 Not Found` → Product does not exist
* `500 Internal Server Error` → Server failure

---

### Database

Edge Cases:

* MongoDB Atlas Connection Failure
* Wrong Credentials
* Network Timeout
* Invalid Connection String

Common Responses:

* `500 Internal Server Error` → Database connection failure
* `503 Service Unavailable` → Database temporarily unavailable

---

# React State Management

## What is State?

State is data that can change over time and affects what is displayed on the screen.

Example:

```javascript
const [count, setCount] = useState(0);
```

State determines:

* What users see
* What users can interact with
* How UI changes after actions

---

## Local State

Local state belongs to a single component.

Example:

```javascript
const [product, setProduct] = useState({
  name: "",
  price: "",
  image: ""
});
```

Used For:

* Form Inputs
* Toggle Buttons
* Modal Visibility
* Temporary UI Data

Advantages:

* Simple
* Easy to understand

Limitations:

* Cannot easily share across multiple components

---

## Prop Drilling

Prop drilling occurs when data must pass through multiple components before reaching the component that needs it.

Example:

```text
App
│
├── Navbar
│
└── HomePage
     │
     └── ProductCard
```

Problem:

If ProductCard needs data from App:

```text
App
 ↓
HomePage
 ↓
ProductCard
```

Data must travel through intermediate components.

Issues:

* Hard to maintain
* Difficult to scale
* Unnecessary re-renders

---

# Zustand State Management

## What is Zustand?

Zustand is a lightweight state management library for React.

Installation:

```bash
npm install zustand
```

Purpose:

* Create Global State
* Share Data Across Components
* Reduce Prop Drilling
* Centralize Business Logic

---

## Why Zustand?

Without Zustand:

```text
App
 ↓
HomePage
 ↓
ProductCard
```

Data must be passed manually.

With Zustand:

```text
Global Store
     │
 ┌───┼────┐
 │   │    │
 ▼   ▼    ▼
App Navbar ProductCard
```

Any component can access state directly.

---

## Zustand Store Structure

Example:

```javascript
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],

  setProducts: (products) =>
    set({ products }),
}));
```

Components can access state:

```javascript
const { products } = useProductStore();
```

---

## Why Store API Logic Inside Zustand?

Instead of:

```javascript
HomePage.jsx
CreatePage.jsx
Navbar.jsx
```

all calling APIs separately,

we centralize business logic:

```javascript
store/product.js
```

Benefits:

* Single source of truth
* Reusable functions
* Cleaner components
* Easier debugging

---

## Global Store Responsibilities

Current Store Functions:

### fetchProducts()

Gets all products from backend.

### createProduct()

Creates product in database.

### updateProduct()

Updates product.

### deleteProduct()

Deletes product.

---

## Optimistic UI Updates

After a successful API call:

```javascript
set((state) => ({
  products: [...state.products, data]
}));
```

UI updates immediately.

Benefits:

* Faster user experience
* No page refresh needed

---

## State Flow

```text
User Action
     │
     ▼
Component
     │
     ▼
Zustand Store
     │
     ▼
Backend API
     │
     ▼
MongoDB
     │
     ▼
Store Updated
     │
     ▼
UI Re-rendered
```

---

# React Router

## What is React Router?

React Router enables navigation between pages without refreshing the browser.

Installation:

```bash
npm install react-router-dom
```

Example:

```javascript
<Route path="/" element={<HomePage />} />

<Route path="/create" element={<CreatePage />} />
```

Benefits:

* Single Page Application (SPA)
* Faster navigation
* Better user experience

---

# Chakra UI

## What is Chakra UI?

Chakra UI is a React component library.

Examples:

* Button
* Input
* Container
* Modal
* Flex
* Grid

Benefits:

* Faster development
* Accessibility support
* Responsive design
* Consistent UI

---

# useColorMode

Used for Light Mode / Dark Mode.

Example:

```javascript
const { colorMode, toggleColorMode } =
useColorMode();
```

Purpose:

* Theme switching
* Better user experience
* Accessibility

---

# Vite Proxy

Problem:

Frontend runs on:

```text
localhost:5173
```

Backend runs on:

```text
localhost:5000
```

Direct requests may cause CORS issues.

Solution:

```javascript
server: {
  proxy: {
    "/api": {
      target: "http://localhost:5000"
    }
  }
}
```

Now:

```javascript
fetch("/api/products")
```

automatically becomes:

```javascript
fetch("http://localhost:5000/api/products")
```

---

# Modal

A modal is a temporary popup interface.

Used For:

* Editing products
* Confirmations
* User interactions

Example:

```text
Update Product
 ┌─────────────┐
 │ Name        │
 │ Price       │
 │ Image       │
 │             │
 │ Update      │
 └─────────────┘
```
# Single Deployment Architecture

## What is Single Deployment?

Single deployment means both the frontend and backend are deployed together as one application.

Instead of:

```text
Frontend → Vercel

Backend → Render
```

we deploy:

```text
React Frontend
       │
       ▼
Express Server
       │
       ▼
MongoDB Atlas
```

under a single domain.

Example:

```text
https://ananta-pocket.onrender.com
```

Benefits:

* Easier deployment
* Lower hosting costs
* Single domain
* Simpler maintenance
* No CORS configuration between frontend and backend

---

# npm run dev

Used during development.

Example:

```bash
npm run dev
```

Purpose:

* Starts the development server
* Enables hot reload
* Faster debugging

Example Configuration:

```json
{
  "dev": "cross-env NODE_ENV=development nodemon backend/server.js"
}
```

Characteristics:

* Development only
* Auto restarts on file changes
* Detailed error messages

---

# npm run build

Creates an optimized production version of the application.

Example:

```bash
npm run build
```

Build Process:

1. Install backend dependencies
2. Install frontend dependencies
3. Build React application
4. Generate production assets

Example:

```json
{
  "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
}
```

Purpose:

* Optimize assets
* Bundle JavaScript
* Minify code
* Prepare for deployment

---

# npm run start

Used in production.

Example:

```bash
npm run start
```

Example Configuration:

```json
{
  "start": "cross-env NODE_ENV=production node backend/server.js"
}
```

Purpose:

* Start the production server
* Serve API routes
* Serve React application

Difference:

| Command       | Environment            | Purpose                  |
| ------------- | ---------------------- | ------------------------ |
| npm run dev   | Development            | Local development        |
| npm run build | Production Preparation | Create optimized build   |
| npm start     | Production             | Run deployed application |

---

# What is the dist Folder?

The dist folder contains the production-ready React application.

Generated By:

```bash
npm run build
```

Structure:

```text
dist/
├── assets/
├── index.html
└── static files
```

Purpose:

* Optimized JavaScript
* Optimized CSS
* Production assets

The Express server serves files from this folder.

Example:

```javascript
app.use(express.static(path.join(__dirname,"frontend","dist")));
```

---

# What is Linting?

Linting is the process of analyzing code for errors, inconsistencies, and bad practices.

Purpose:

* Detect bugs early
* Enforce coding standards
* Improve readability
* Maintain code quality

Example Problems:

```javascript
const name = "John"
console.log(name)
```

Linting may warn about:

* Missing semicolons
* Unused variables
* Undefined variables
* Incorrect React patterns

---

# ESLint

ESLint is the linting tool used in this project.

Configuration File:

```text
eslint.config.js
```

Responsibilities:

* Code quality checks
* React best practices
* Consistent coding style

Example Command:

```bash
npm run lint
```

Example Output:

```text
Warning:
'product' is assigned a value but never used.
```

Benefits:

* Cleaner code
* Fewer bugs
* Better maintainability

---

# Production Environment

Applications behave differently in development and production.

Environment Variable:

```javascript
process.env.NODE_ENV
```

Values:

```text
development
production
```

Example:

```javascript
if(process.env.NODE_ENV === "production")
```

Used For:

* Serving React build files
* Performance optimizations
* Environment-specific logic

---

# Render

Render is a cloud hosting platform used to deploy Ananta-Pocket.

Features:

* Free hosting tier
* GitHub integration
* Automatic deployments
* Environment variable support
* Continuous deployment

Benefits:

* Simple deployment workflow
* No server management
* Automatic rebuilds on GitHub pushes

---

# Continuous Deployment

Continuous Deployment (CD) automatically deploys code changes.

Workflow:

```text
Code Changes
      │
      ▼
Git Commit
      │
      ▼
GitHub Push
      │
      ▼
Render Detects Changes
      │
      ▼
Build Process Runs
      │
      ▼
Application Updated
```

