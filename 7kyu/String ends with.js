// ❓ DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// ❗ Solutions

function solution(str, ending) {
    let end = 0;
    let arr2 = ending.split("");
    let arr1 = "";
    end = arr1.length - arr2.length;
    arr1 = str.split("").slice(end);
    if (arr2.length > arr1.length) {
      return false;
    }
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    return true;
  }