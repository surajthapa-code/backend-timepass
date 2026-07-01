//jod
import express from "express";
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(` incoming ${req.method} request at ${req.url} `);
  next();
}); 
app.post("/articles", (req, res) => {
  const { title, content, author } = req.body;
  //save in the data base here

  res.status(201).json({
    tittle,
    content,
    author,
  });
});

app.listen(3000, () => {
  console.log(`service live at http://localhost:3000/articles`);
});

import express from "express";
import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  age: z.number().min(18),
});
const app = express();
