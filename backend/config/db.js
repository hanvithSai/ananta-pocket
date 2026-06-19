import mongoose from 'mongoose';

export const connectDB = async (MONGO_URI) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // Use the environment variable for the MongoDB URI
    console.log(`MongoDB connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1); // Exit the process with an error code
  }
};