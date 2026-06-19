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
