// ❓ Description:
// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

// ❗ Solutions

function checkThreeAndTwo(array) {
    let countA = 0;
    let countB = 0;
    let countC = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "a") {
        countA++;
      } else if (array[i] === "b") {
        countB++;
      } else {
        countC++;
      }
    }
    if(countA > 3 || countB > 3 || countC > 3) {
      return false
    } else if (countA === 1 || countB === 1 || countC === 1) {
      return false
    } else {
      return true
    }
  }