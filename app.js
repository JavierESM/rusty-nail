const express = require("express");
const { link } = require("fs");
const app = express();
const path = require("path");

app.get("/", function (req, res) {
  let file = path.resolve("../index.html");
  res.sendFile(file);
});

app.get("/login", function (req, res) {
  let file = path.resolve("./login.html");
  res.sendFile(file);
});

app.get("/product", function (req, res) {
  let file = path.resolve("/product.html");
  res.sendFile(file);
});

app.get("*", function (req, res) {
  if (req.url.endsWith(".css")) {
    let file = path.resolve("./" + req.url);
    return res.sendFile(file);
  }

  let images = ["jpg", "jepg", "gif", "png", "svg"];
  let ext = req.url.split(".")[1];

  if (images.includes(ext)) {
    let file = path.resolve("./" + req.url);
    return res.sendFile(file);
  }
});

app.listen(3030, () => console.log("Servidor Funcionando"));
