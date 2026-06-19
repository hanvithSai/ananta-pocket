import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,   
    required: true,
  },
  price: {
    type: Number,
    required: true,    
  },
  image: {
        type: String,
        required: true,
  }
},
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

const Product = mongoose.model("Product", productSchema); // Create a Mongoose model named "Product" using the defined schema
export default Product;