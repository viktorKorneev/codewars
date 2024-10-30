// ❓ Description:
// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// ❗ Solutions

function capitalize(s, arr) {
    let array = s.split("");
    for (let i = 0; i < array.length; i++) {
      if (arr.includes(i)) {
        array[i] = array[i].toUpperCase();
      }
    }
  
    return array.join('');
  }