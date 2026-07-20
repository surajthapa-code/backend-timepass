import mongoose from "mongoose";


export async function connectDB() {
    
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connection Sucess");
  } catch (err) {
    console.log(err, "err while DB connection");
  }
}
