// ❓ Description:
// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

// ❗ Solutions

function toWeirdCase(string) {
    string = string.split(" ");
    for (let i = 0; i < string.length; i++) {
      string[i] = string[i].split("");
      for (let j = 0; j < string[i].length; j++) {
        if (j % 2 === 0) {
          string[i][j] = string[i][j].toUpperCase();
        } else {
          string[i][j] = string[i][j].toLowerCase();
        }
      }
    }
  
    return string.join(" ").split(",").join("");
  }