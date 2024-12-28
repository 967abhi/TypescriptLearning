import express  from "express";
import { checkinguser, registerController } from "../controller/user.controller";
const userRoutes=express.Router();

userRoutes.get("/checking",checkinguser);
// userRoutes.post("/register",registerController)
userRoutes.post("/register",registerController)
export default userRoutes;