import express from "express";
import { login, register, registerAdmin } from "../controllers/auth.controller.js";

const authRouter = express.Router();

// registering a user
authRouter.post("/register", register)

// login
authRouter.post("/login", login)

// register as admin
authRouter.post("/registerAdmin", registerAdmin)

export default authRouter; 