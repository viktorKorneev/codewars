// ❓ Description:
// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

// ❗ Solutions

String.prototype.digit = function () {
    let result = /^[0-9]$/;
    return result.test(this);
  };