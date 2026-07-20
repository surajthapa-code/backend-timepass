import e from "express";
import { registerUser } from "../controllers/auth.controllers.js";

export const router = e.Router();

router.post("/register", registerUser);

router.get("/test", (req, res) => {
  console.log("test api call");
  res.json({
    message: "test",
    cookies: req.cookies,
  });
});
