import e from "express";
import { router } from "./routes/auth.routes.js";
import cookieParse from "cookie-parser";

export const app = e();

app.use(e.json());
app.use(cookieParse());

app.use("/api/auth", router);
