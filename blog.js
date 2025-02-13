//blog management

const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});

app.use();

app.get("/", (req, res) => {
  res.send("Welcome to the Blog API");
});

app.post("/create", (req, res) => {
  let blog = req.body;
  blogs.push(blog);
  res.send("Blog created successfully");
});

app.get("/blogs", (req, res) => {
  res.json(blogs);
});
