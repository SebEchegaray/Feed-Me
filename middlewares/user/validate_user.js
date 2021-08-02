const User = require("../../models/user");
const { isBlank, validationError } = require("../validation_utils");

// Middleware for validating user inputs before creating a user in the db
const validateUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  if (isBlank(name)) throw validationError("Name is required");
  if (isBlank(email)) throw validationError("Email is required");
  if (isBlank(password)) throw validationError("Password is required");
  if (password.length < 8) {
    throw new Error("Password must be greater than 8 characters");
  }

  // TODO check if email exists, if so throw error
  // if (emailExists(email)) throw validationError("Email already in use");

  next();
};

module.exports = validateUser;
