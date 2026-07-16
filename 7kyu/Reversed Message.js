// ❓ Description:
// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol is now in the first position of the word, no capitalisation needs to occur.

// Examples:

//   Given: "Reverse this message!"
// Returns: "!egassem Siht Esrever"

//   Given: "Today is the 14th of January!"
// Returns: "!yraunaj Fo Ht41 Eht Si Yadot"

//   Given: ""
// Returns: ""

// ❗ Solutions

function isLetter(ch) {
  return ch && ch.toLowerCase() !== ch.toUpperCase();
}

function reverseMessage(str) {
  str = str.toLowerCase().split("").reverse();
  if (isLetter(str[0])) {
    str[0] = str[0].toUpperCase();
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        str[i + 1] = str[i + 1].toUpperCase();
      }
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        str[i + 1] = str[i + 1].toUpperCase();
      }
    }
  }

  return str.join("");
}