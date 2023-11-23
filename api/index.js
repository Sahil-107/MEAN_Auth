import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const connectMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to DB");
    } catch (error) {
        throw error
    }
}


app.listen(8800, ()=>{
    connectMongoDB();
    console.log("connected to backend");
})