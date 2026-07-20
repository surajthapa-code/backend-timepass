import e from "express";
import { registerUser } from "../controllers/auth.controllers";

export const router = e.Router();

router.post("/register", registerUser);
