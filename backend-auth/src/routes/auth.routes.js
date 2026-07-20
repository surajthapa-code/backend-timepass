import e from "express";
import { registerUser } from "../controllers/auth.controllers.js";

export const router = e.Router();

router.post("/register", registerUser);
