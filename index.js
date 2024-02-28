import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

;(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: 'admin'});
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
})();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
