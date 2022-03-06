const { createCustomerError, CustomAPIError } = require("../errors/errors");
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.status).json({ err: err.message });
  }
  return res.status(500).json({ err: "Some thing went wrong." });
};

module.exports = errorHandler;
