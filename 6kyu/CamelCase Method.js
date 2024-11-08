// ❓ Description:
// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

// ❗ Solutions

String.prototype.camelCase = function() {
    let str = this.split(" ");
    for (let i = 0; i < str.length; i++) {
      if (str[i]) { 
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
    }
    return str.join("");
  }