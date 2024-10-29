// ❓ Description:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// ❗ Solutions

function capitalize(s) {
    let result = [];
    let str0 = s.split("");
    for (let i = 0; i < str0.length; i++) {
      if (i % 2 === 0) {
        str0[i] = str0[i].toUpperCase();
      }
    }
    let str1 = s.split("");
  
    for (let i = 0; i < str1.length; i++) {
      if (i % 2 !== 0) {
        str1[i] = str1[i].toUpperCase();
      }
    }
    result.push(str0.join(""), str1.join(""));
  
    return result;
  }