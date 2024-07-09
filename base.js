class BaseError extends Error {
  constructor(message, errorDetail) {
    super(message);
    this.message = message;
    this.name = this.constructor.name;
    this.code = errorDetail.code;
  }
}

module.exports = BaseError;