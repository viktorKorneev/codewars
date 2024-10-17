// ❓ DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// ❗ Solutions

function getCount(str) {
    let count = 0;
    let strArray2 = str.split("");
    const strArray = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < strArray.length; i++) {
      for (let j = 0; j < strArray2.length; j++) {
        if (strArray[i] === strArray2[j]) {
          count++;
        }
      }
    }
    return count;
  }

  // ----------------------------------------------

  function getCount(str) {
    let count = 0;
    const arr2 = ["a", "e", "i", "o", "u"];
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr2.includes(arr[i])) {
        count++;
      }
    }
  
    return count;
  }