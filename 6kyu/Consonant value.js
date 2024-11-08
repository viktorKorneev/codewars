// ❓ Description:
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia c"

// "zodiac" -> 26
// The consonant substrings are: "z", "d" and "c" with values "z" = 26, "di" = 4 and "c" = 3. The highest is 26.

// "strength" -> 57
// The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

// ❗ Solutions

function solve(s) {
    let sumResult = [];
    let result = [];
    let sumEl = 0;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const a = "aeiou";
    s = s.split("");
  
    for (let i = 0; i < s.length; i++) {
      if (a.includes(s[i])) {
        s[i] = " ";
      }
    }
    for (let i = 0; i < s.length; i++) {
      if (alphabet.includes(s[i])) {
        sumResult.push(alphabet.indexOf(s[i]) + 1);
      } else if (s[i] === " ") {
        sumResult.push(0);
      }
    }
    sumResult.push(0);
    for (let i = 0; i < sumResult.length; i++) {
      sumEl += sumResult[i];
      if (sumResult[i] === 0) {
        result.push(sumEl);
        sumEl = 0;
      }
    }
  
    return Math.max(...result);
  }