const express = require("express");
require("dotenv").config();
const chats = require("./data/data.js");

const app = express();

app.get("/", (req, res) => {
  res.send("API is ");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log("server started");
});
