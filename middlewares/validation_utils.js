function isBlank(input) {
  if (input === "" || input === undefined || input === null) {
    return true;
  } else {
    return false;
  }
}

function validationError(message) {
  const error = new Error(message);
  error.status = 422;
  return error;
}

module.exports = { isBlank, validationError };
