// ❓ Description:
// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

// ❗ Solutions

function averageString(str) {
    let midle = 0;
    const number = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
    };
  
    if (str.length === 0) return "n/a";
    str = str.split(" ");
  
    for (let i = 0; i < str.length; i++) {
      let found = false;
      for (let key in number) {
        if (str[i] === number[key]) {
          str[i] = Number(key);
          midle += str[i];
          found = true; 
          break;
        } 
      }
      if (!found) return "n/a";
    }
    midle /= str.length;
    midle = Math.floor(midle);
    
    for (let key in number) {
      if (midle === Number(key)) {
        return number[key];
      }
    }
    return "n/a"
  }