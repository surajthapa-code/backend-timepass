require("dotenv").config();
const express = require("express");
const app = express();
const port = 6000;

app.get("/", (req, res) => {
  res.send("Hello World! suraj here");
});

app.get("/suraj", (req, res) => {
  res.send("this is for suraj");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
