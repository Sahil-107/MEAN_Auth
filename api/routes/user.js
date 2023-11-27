import express  from "express";
import { getAllUsers, getById } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get('/', getAllUsers);

userRouter.get('/:id', getById);

export default userRouter;