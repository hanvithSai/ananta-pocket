# API Reference

Base URL

```text
http://localhost:5000/api
```

---

# Product APIs

## Get All Products

### Endpoint

```http
GET /products
```

### Success Response

```json
{
  "success": true,
  "data": [
    {
      "_id": "665f6a7e9d8f",
      "name": "Headphones",
      "price": 2999,
      "image": "url"
    }
  ]
}
```

### Status Codes

| Code | Description  |
| ---- | ------------ |
| 200  | Success      |
| 500  | Server Error |

---

## Create Product

### Endpoint

```http
POST /products
```

### Request Body

```json
{
  "name": "Headphones",
  "price": 2999,
  "image": "https://example.com/image.jpg"
}
```

### Success Response

```json
{
  "success": true,
  "data": {
    "_id": "665f6a7e9d8f",
    "name": "Headphones",
    "price": 2999,
    "image": "https://example.com/image.jpg"
  }
}
```

### Status Codes

| Code | Description       |
| ---- | ----------------- |
| 201  | Product Created   |
| 400  | Validation Failed |
| 500  | Server Error      |

---

## Update Product

### Endpoint

```http
PUT /products/:id
```

### Request Body

```json
{
  "name": "Updated Headphones",
  "price": 3999
}
```

### Success Response

```json
{
  "success": true,
  "data": {}
}
```

### Status Codes

| Code | Description          |
| ---- | -------------------- |
| 200  | Updated Successfully |
| 404  | Product Not Found    |
| 500  | Server Error         |

---

## Delete Product

### Endpoint

```http
DELETE /products/:id
```

### Success Response

```json
{
  "success": true,
  "message": "Product deleted"
}
```

### Status Codes

| Code | Description          |
| ---- | -------------------- |
| 200  | Deleted Successfully |
| 404  | Product Not Found    |
| 500  | Server Error         |

---

# Common Response Format

## Success

```json
{
  "success": true,
  "data": {}
}
```

## Error

```json
{
  "success": false,
  "message": "Error message"
}
```

---

# API Testing

Tool Used:

* Postman

Typical Workflow:

1. Create Product
2. Get Products
3. Update Product
4. Delete Product
5. Verify Database Changes
