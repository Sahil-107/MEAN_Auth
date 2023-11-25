import express from "express";
import { login, register } from "../controllers/auth.controller.js";

const authRouter = express.Router();

// registering a user
authRouter.post("/register", register)

// login
authRouter.post("/login", login)

export default authRouter; 