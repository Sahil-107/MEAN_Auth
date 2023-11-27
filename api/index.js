import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import roleRouter from './routes/role.js'
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import cookieParser from 'cookie-parser';

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
 
app.use(express.json());
app.use(cookieParser());
app.use("/api/role", roleRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// Response handler middleware
app.use((obj, req, res, next)=>{
    const statusCode = obj.status || 500;
    const message = obj.message || "Something went wrong!";
    return res.status(statusCode).json({
        success: [200, 201, 204].some(a=>a===obj.status) ? true : false,
        status: statusCode,
        message: message,
        data: obj.data
    })
})

app.listen(8800, ()=>{
    connectMongoDB();
    console.log("connected to backend");
})