// its a file thats because .js
import products from "./data/products.js";
import connectDB from "./config/db.js";
import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
connectDB();

var app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API running ... ");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || "<no mode configured>";

app.listen(
  PORT,
  console.log(`Listening on '${MODE}' mode to port '${PORT}'`.yellow.bold)
);
