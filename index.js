//jod
import express from "express";
import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  age: z.number().min(18),
});
const app = express();
