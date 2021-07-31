// Middleware for logging requests
const logger = (req, res, next) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);

  // This calls the function in the middleware to run
  next();
};

module.exports = logger;
