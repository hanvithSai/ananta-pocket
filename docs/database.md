# Database Documentation

## Database Technology

Database: MongoDB Atlas

Type: NoSQL Document Database

ODM: Mongoose

---

# Database Structure

```text
Database
│
└── products
      │
      ├── Product Document 1
      ├── Product Document 2
      └── Product Document N
```

---

# Product Collection

Collection Name:

```text
products
```

---

# Product Schema

```javascript
const productSchema = new mongoose.Schema(
{
   name:{
      type:String,
      required:true
   },
   price:{
      type:Number,
      required:true
   },
   image:{
      type:String,
      required:true
   }
},
{
   timestamps:true
});
```

---

# Sample Document

```json
{
  "_id": "665f6a7e9d8f",
  "name": "Headphones",
  "price": 2999,
  "image": "https://example.com/image.jpg",
  "createdAt": "2026-06-20T10:30:00Z",
  "updatedAt": "2026-06-20T10:30:00Z"
}
```

---

# Field Definitions

| Field     | Type     | Required | Description                |
| --------- | -------- | -------- | -------------------------- |
| _id       | ObjectId | Yes      | Unique document identifier |
| name      | String   | Yes      | Product name               |
| price     | Number   | Yes      | Product price              |
| image     | String   | Yes      | Product image URL          |
| createdAt | Date     | Auto     | Creation timestamp         |
| updatedAt | Date     | Auto     | Last update timestamp      |

---

# Indexing Strategy

Current:

```text
Default _id Index
```

Future:

```javascript
productSchema.index({ name: 1 });
productSchema.index({ price: 1 });
```

Benefits:

* Faster searching
* Faster filtering
* Better scalability

---

# Data Validation Rules

## Name

Rules:

* Required
* String

Example:

```json
{
  "name": "Headphones"
}
```

---

## Price

Rules:

* Required
* Number

Example:

```json
{
  "price": 2999
}
```

---

## Image

Rules:

* Required
* String URL

Example:

```json
{
  "image": "https://example.com/image.jpg"
}
```

---

# Database Operations

## Create

```javascript
await Product.create(product);
```

## Read

```javascript
await Product.find({});
```

## Update

```javascript
await Product.findByIdAndUpdate(id,data);
```

## Delete

```javascript
await Product.findByIdAndDelete(id);
```

# Data Access Layer

Frontend never communicates directly with MongoDB.

Architecture:

```text
React
 │
 ▼
Zustand Store
 │
 ▼
Express API
 │
 ▼
Mongoose
 │
 ▼
MongoDB
```