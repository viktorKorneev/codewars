// ❓ DESCRIPTION:
// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

// ❗ Solutions

function arraySum(arr) {
    let num = 0;
    let result = arr.join(",");
    let resultArray = result.split(",");
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i] && !isNaN(resultArray[i])) {
        num += +resultArray[i];
      }
    }
    return num;
  }