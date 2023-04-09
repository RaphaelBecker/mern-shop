// If a route is not found, respond a new created error "Not Found"
const notFound = (req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// use middleware: execute the arrow function between the req - res live cylce.
// Here custom error responses are generated. (Usually HTML, we only want json)
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.MODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
