// ❓ Description:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// ❗ Solutions

// function scramble(str1, str2) {
//     let charCount = {};
  
//     for (let char of str1) {
//       charCount[char] = (charCount[char] || 0) + 1;
//     }
  
//     for (let char of str2) {
//       if (!charCount[char]) {
//         return false;
//       }
//       charCount[char]--;
//     }
  
//     return true;
//   }

// ============================================================

// function scramble(str1, str2) {
//   str1 = str1.split("");
//   str2 = str2.split("");
//   let result = [];
//   let countIndex = 0;
//   while (countIndex < str2.length) {
//     for (let i = 0; i < str1.length; i++) {
//       if (str1[i] === str2[countIndex]) {
//         result.push(str1[i]);
//         str1[i] = "";
//         break;
//       }
//     }
//     countIndex++;
//   }

//   return result.join("") === str2.join("");
// }