import e from "express";
import { router } from "./routes/auth.routes";

export const app = e();
app.use(e.json());
 
app.use("/api/auth", router);
