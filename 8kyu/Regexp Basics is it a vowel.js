// ❓ Description:
// Implement the function which should return true if given object is a vowel 
// (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.

// ❗ Solutions

String.prototype.vowel = function () {
    let result = /^[aeiou]$/i;
    return result.test(this);
  };