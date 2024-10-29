// ❓ Description:
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// Some examples:

// ([1,2,3,4,5], "value") should return 1
// ([1,2,3,4,5], "index") should return 0

// ❗ Solutions

function min(arr, toReturn) {
    let min = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[min]) {
        min = i;
      }
    }
    if (toReturn === "value") {
      return Math.min(...arr);
    } else {
      return min;
    }
  }