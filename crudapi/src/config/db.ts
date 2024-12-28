// import mongoose from "mongoose";
// const connectDB=async()=>{
// await mongoose.connect("mongodb+srv://pschauhan468:Hippro%40ripple@cluster0.h7p2m.mongodb.net/");
// }
import mongoose, { mongo } from "mongoose";

const database=mongoose.connect("mongodb+srv://pschauhan468:Hippro%40ripple@cluster0.h7p2m.mongodb.net/");
export default database;