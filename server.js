const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/index", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/game", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "game.html"));
});

app.get("/rules", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "rules.html"));
});

app.listen(4000);
