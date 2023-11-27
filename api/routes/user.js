import express  from "express";
import { getAllUsers, getById } from "../controllers/user.controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const userRouter = express.Router();

userRouter.get('/',verifyAdmin , getAllUsers);

userRouter.get('/:id', verifyUser ,getById);

export default userRouter;