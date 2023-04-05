const products = require("./data/products");

var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API running .. ");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(5000, console.log("Listening to port 5000"));
