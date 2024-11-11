// ❓ Description:
// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// ❗ Solutions

function findMissingLetter(array) {
    let upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let index = 0;
  
    if (upperAlphabet.includes(array[0])) {
      index = upperAlphabet.indexOf(array[0]);
  
      for (let i = 0; i < array.length; i++) {
        if (upperAlphabet[index + i] !== array[i]) {
          return upperAlphabet[index + i];
        }
      }
    } else {
      index = lowerAlphabet.indexOf(array[0]);
      for (let i = 0; i < array.length; i++) {
        if (lowerAlphabet[index + i] !== array[i]) {
          return lowerAlphabet[index + i];
        }
      }
    }
  }