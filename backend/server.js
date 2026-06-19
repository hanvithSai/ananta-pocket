//  The entry point for the API

// const express = require('express'); OLD convention
import express from "express"; // NEW convention using ES6 modules
import dotenv from "dotenv"; // Import the dotenv package to load environment variables from a .env file
import { connectDB } from "./config/db.js"; // Import the function to connect to the database
import productRoutes from "./routes/product.route.js"; // Import the product routes


dotenv.config(); // Load environment variables from the .env file

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

const app = express();

app.use(express.json()); // Middleware to parse JSON data from request bodies

app.use("/api/products", productRoutes); // Use the product routes for any requests to /api/products

app.listen(5000, () => {
  connectDB(); // Connect to the database using the environment variable for the MongoDB URI
  console.log("Server started on http://localhost:5000");
});
