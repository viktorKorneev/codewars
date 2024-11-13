// ❓ Description:
// Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

// If such letters are two or more, choose the one that appears in the string( earlier.

// For example:

// ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
// ('real talk bro', 'n') => 'neal talk bno'
// ('great job go ahead', 'k') => 'grekt job go khekd'

// ❗ Solutions

function replaceCommon(string, letter) {
    let stringa = string.split(" ").join("");
    let obj = {};
    string = string.split("");
    for (let str of stringa) {
      obj[str] = (obj[str] || 0) + 1;
    }
    let a = "";
    let max = 0;
    for (let i = 0; i < stringa.length; i++) {
      if (obj[stringa[i]] > max) {
        max = obj[stringa[i]];
        a = stringa[i];
      }
    }
    for (let i = 0; i < string.length; i++) {
      if (string[i] === a) {
        string[i] = letter;
      }
    }
   
    return string.join("");
  }