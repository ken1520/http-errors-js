const config = require('./config');
const BaseError = require('./base');

class BadRequestError extends BaseError {
  constructor(message = config.BadRequestError.message) {
    super(message, config.BadRequestError);
  }
}

class UnauthorizedError extends BaseError {
  constructor(message = config.UnauthorizedError.message) {
    super(message, config.UnauthorizedError);
  }
}

class PaymentRequiredError extends BaseError {
  constructor(message = config.PaymentRequiredError.message) {
    super(message, config.PaymentRequiredError);
  }
}

class ForbiddenError extends BaseError {
  constructor(message = config.ForbiddenError.message) {
    super(message, config.ForbiddenError);
  }
}

class NotFoundError extends BaseError {
  constructor(message = config.NotFoundError.message) {
    super(message, config.NotFoundError);
  }
}

class MethodNotAllowedError extends BaseError {
  constructor(message = config.MethodNotAllowedError.message) {
    super(message, config.MethodNotAllowedError);
  }
}

class NotAcceptableError extends BaseError {
  constructor(message = config.NotAcceptableError.message) {
    super(message, config.NotAcceptableError);
  }
}

class ProxyAuthenticationRequiredError extends BaseError {
  constructor(message = config.ProxyAuthenticationRequiredError.message) {
    super(message, config.ProxyAuthenticationRequiredError);
  }
}

class RequestTimeoutError extends BaseError {
  constructor(message = config.RequestTimeoutError.message) {
    super(message, config.RequestTimeoutError);
  }
}

class ConflictError extends BaseError {
  constructor(message = config.ConflictError.message) {
    super(message, config.ConflictError);
  }
}

class GoneError extends BaseError {
  constructor(message = config.GoneError.message) {
    super(message, config.GoneError);
  }
}

class LengthRequiredError extends BaseError {
  constructor(message = config.LengthRequiredError.message) {
    super(message, config.LengthRequiredError);
  }
}

class PreconditionFailedError extends BaseError {
  constructor(message = config.PreconditionFailedError.message) {
    super(message, config.PreconditionFailedError);
  }
}

class PayloadTooLargeError extends BaseError {
  constructor(message = config.PayloadTooLargeError.message) {
    super(message, config.PayloadTooLargeError);
  }
}

class URITooLongError extends BaseError {
  constructor(message = config.URITooLongError.message) {
    super(message, config.URITooLongError);
  }
}

class UnsupportedMediaTypeError extends BaseError {
  constructor(message = config.UnsupportedMediaTypeError.message) {
    super(message, config.UnsupportedMediaTypeError);
  }
}

class RangeNotSatisfiableError extends BaseError {
  constructor(message = config.RangeNotSatisfiableError.message) {
    super(message, config.RangeNotSatisfiableError);
  }
}

class ExpectationFailedError extends BaseError {
  constructor(message = config.ExpectationFailedError.message) {
    super(message, config.ExpectationFailedError);
  }
}

class MisdirectedRequestError extends BaseError {
  constructor(message = config.MisdirectedRequestError.message) {
    super(message, config.MisdirectedRequestError);
  }
}

class UnprocessableEntityError extends BaseError {
  constructor(message = config.UnprocessableEntityError.message) {
    super(message, config.UnprocessableEntityError);
  }
}

class LockedError extends BaseError {
  constructor(message = config.LockedError.message) {
    super(message, config.LockedError);
  }
}

class FailedDependencyError extends BaseError {
  constructor(message = config.FailedDependencyError.message) {
    super(message, config.FailedDependencyError);
  }
}

class TooEarlyError extends BaseError {
  constructor(message = config.TooEarlyError.message) {
    super(message, config.TooEarlyError);
  }
}

class UpgradeRequiredError extends BaseError {
  constructor(message = config.UpgradeRequiredError.message) {
    super(message, config.UpgradeRequiredError);
  }
}

class PreconditionRequiredError extends BaseError {
  constructor(message = config.PreconditionRequiredError.message) {
    super(message, config.PreconditionRequiredError);
  }
}

class TooManyRequestsError extends BaseError {
  constructor(message = config.TooManyRequestsError.message) {
    super(message, config.TooManyRequestsError);
  }
}

class RequestHeaderFieldsTooLargeError extends BaseError {
  constructor(message = config.RequestHeaderFieldsTooLargeError.message) {
    super(message, config.RequestHeaderFieldsTooLargeError);
  }
}

class UnavailableForLegalReasonsError extends BaseError {
  constructor(message = config.UnavailableForLegalReasonsError.message) {
    super(message, config.UnavailableForLegalReasonsError);
  }
}

class InternalServerError extends BaseError {
  constructor(message = config.InternalServerError.message) {
    super(message, config.InternalServerError);
  }
}

class NotImplementedError extends BaseError {
  constructor(message = config.NotImplementedError.message) {
    super(message, config.NotImplementedError);
  }
}

class BadGatewayError extends BaseError {
  constructor(message = config.BadGatewayError.message) {
    super(message, config.BadGatewayError);
  }
}

class ServiceUnavailableError extends BaseError {
  constructor(message = config.ServiceUnavailableError.message) {
    super(message, config.ServiceUnavailableError);
  }
}

class GatewayTimeoutError extends BaseError {
  constructor(message = config.GatewayTimeoutError.message) {
    super(message, config.GatewayTimeoutError);
  }
}

class HTTPVersionNotSupportedError extends BaseError {
  constructor(message = config.HTTPVersionNotSupportedError.message) {
    super(message, config.HTTPVersionNotSupportedError);
  }
}

class VariantAlsoNegotiatesError extends BaseError {
  constructor(message = config.VariantAlsoNegotiatesError.message) {
    super(message, config.VariantAlsoNegotiatesError);
  }
}

class InsufficientStorageError extends BaseError {
  constructor(message = config.InsufficientStorageError.message) {
    super(message, config.InsufficientStorageError);
  }
}

class LoopDetectedError extends BaseError {
  constructor(message = config.LoopDetectedError.message) {
    super(message, config.LoopDetectedError);
  }
}

class NotExtendedError extends BaseError {
  constructor(message = config.NotExtendedError.message) {
    super(message, config.NotExtendedError);
  }
}

class NetworkAuthenticationRequiredError extends BaseError {
  constructor(message = config.NetworkAuthenticationRequiredError.message) {
    super(message, config.NetworkAuthenticationRequiredError);
  }
}

module.exports = {
  BadRequestError,
  UnauthorizedError,
  PaymentRequiredError,
  ForbiddenError,
  NotFoundError,
  MethodNotAllowedError,
  NotAcceptableError,
  ProxyAuthenticationRequiredError,
  RequestTimeoutError,
  ConflictError,
  GoneError,
  LengthRequiredError,
  PreconditionFailedError,
  PayloadTooLargeError,
  URITooLongError,
  UnsupportedMediaTypeError,
  RangeNotSatisfiableError,
  ExpectationFailedError,
  MisdirectedRequestError,
  UnprocessableEntityError,
  LockedError,
  FailedDependencyError,
  TooEarlyError,
  UpgradeRequiredError,
  PreconditionRequiredError,
  TooManyRequestsError,
  RequestHeaderFieldsTooLargeError,
  UnavailableForLegalReasonsError,
  InternalServerError,
  NotImplementedError,
  BadGatewayError,
  ServiceUnavailableError,
  GatewayTimeoutError,
  HTTPVersionNotSupportedError,
  VariantAlsoNegotiatesError,
  InsufficientStorageError,
  LoopDetectedError,
  NotExtendedError,
  NetworkAuthenticationRequiredError,
}
