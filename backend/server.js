//  The entry point for the API

// const express = require('express'); OLD convention
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; // Import the function to connect to the database
import Product from "./models/product.model.js";
dotenv.config(); // Load environment variables from the .env file
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use(express.json()); // Middleware to parse JSON data from request bodies

app.post("/api/products", async (req, res) => {
  const product = req.body; // Get the product data from the user-request body
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields" }); // Return a 400 Bad Request response if any required field is missing
  }
  const newProduct = new Product(product); // Create a new product instance using the Product model
  try {
    await newProduct.save(); // Save the new product to the database
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    }); // Return a 201 Created response with the new product data
  } catch (error) {
    console.error(`Error creating product: ${error.message}`); // Log the error message to the console
    res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: error.message,
    }); // Return a 500 Internal Server Error response if there was an error saving the product
  }
});

app.listen(5000, () => {
  connectDB(); // Connect to the database using the environment variable for the MongoDB URI
  console.log("Server started on http://localhost:5000");
});
