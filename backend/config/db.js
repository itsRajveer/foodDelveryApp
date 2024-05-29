import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://rajveer:rajveerRK@cluster0.rfvhfh2.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}