import mongoose from "mongoose";
export const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "schooldb",
      family: 4,
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("connected successfully");
  } catch (error) {
    console.log(error);
  }
};
