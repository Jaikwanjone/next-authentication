import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOB_URI);
    console.log("Connected to MongoDB :");
  } catch (error) {
    console.log("Error connecting MongoDB :", error);
  }
};
