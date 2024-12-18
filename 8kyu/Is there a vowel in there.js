// ❓ Description:
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// ❗ Solutions

function isVow(a) {
    const letters = ["a", "e", "i", "o", "u"];
    let arr = a.map((el) => {
      if (letters.includes(String.fromCharCode(el))) {
        return String.fromCharCode(el);
      } else {
        return el;
      }
    });
  
    return arr;
  }