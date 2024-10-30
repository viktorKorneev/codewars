// ❓ Description:
// The vowel substrings in the word codewarriors are o,e,a,io. 
// The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only 
// (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// ❗ Solutions

function solve(s) {
    let arr = ["a", "o", "i", "e", "u"];
    let lengthMax = 0;
    let lengthStr = 0;
    let str = s.split("");
    for (let i = 0; i < str.length; i++) {
      if (arr.includes(str[i])) {
        lengthStr++;
        if (lengthStr > lengthMax) {
          lengthMax = lengthStr;
        }
      } else {
        lengthStr = 0;
      }
    }
    return lengthMax;
  }