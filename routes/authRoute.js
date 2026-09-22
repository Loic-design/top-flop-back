import { login, register } from "../controllers/authController.js";
import express from "express";

const authRoute = express.Router();

authRoute.post("/login", login);
authRoute.post("/register", register);

export default authRoute;
