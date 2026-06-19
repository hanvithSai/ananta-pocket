import Product from "../models/product.model.js"; // Import the Product model to interact with the products collection in the database
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // Fetch all products from the database using the Product model
    res.json({ success: true, data: products });
  } catch (error) {
    console.error(`Error fetching products: ${error.message}`); // Log the error message to the console
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    }); // Return a 500 Internal Server Error response if there was an error fetching the products
  }
};

export const createProduct = async (req, res) => {
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
}

export const updateProduct = async (req, res) => {
  const { id } = req.params; // Get the product ID from the request parameters
  const updatedData = req.body; // Get the updated product data from the request body
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
    }); // Find the product by ID and update it with the new data, returning the updated document
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" }); // Return a 404 Not Found response if the product does not exist
    }
    res.status(200).json({ success: true, data: updatedProduct }); // Return a 200 OK response with the updated product data
  } catch (error) {
    console.error(`Error updating product: ${error.message}`); // Log the error message to the console
    res.status(500).json({
      success: false,
      message: "Failed to update product",
      error: error.message,
    }); // Return a 500 Internal Server Error response if there was an error updating the product
  }
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params; // Get the product ID from the request parameters
  //   console.log(`Received request to delete product with ID: ${id}`); // Log the received product ID to the console
  try {
    const deletedProduct = await Product.findByIdAndDelete(id); // Find the product by ID and delete it from the database
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" }); // Return a 404 Not Found response if the product does not exist
    } else {
      res
        .status(200)
        .json({ success: true, message: "Product deleted successfully" }); // Return a 200 OK response if the product was deleted successfully
    }
  } catch (error) {
    console.error(`Error deleting product: ${error.message}`); // Log the error message to the console
    res.status(500).json({
      success: false,
      message: "Failed to delete product",
      error: error.message,
    }); // Return a 500 Internal Server Error response if there was an error deleting the product
  }
}

