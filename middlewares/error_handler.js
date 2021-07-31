function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || "Woops, something went wrong";

  res.status(status).json({
    message: message,
  });

  next();
}

module.exports = errorHandler;
