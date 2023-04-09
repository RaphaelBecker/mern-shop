// its a file thats because .js
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
// makes colorizing terminal messages possible
import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

// Use environment variables from .nev file
dotenv.config();

// connect database (imported):
connectDB();

var app = express();

// cors needed?
// app.use(cors());

app.get("/", (req, res) => {
  res.send("API running ... ");
});

// mount productRoutes, route all requests from "/api/products" to module 'productRoutes'
app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || "<no mode configured>";

app.listen(
  PORT,
  console.log(`Listening on '${MODE}' mode to port '${PORT}'`.yellow.bold)
);
