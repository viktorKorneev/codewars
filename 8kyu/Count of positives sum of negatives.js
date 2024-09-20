// ❓ DESCRIPTION:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// ❗ Solutions

function countPositivesSumNegatives(input) {
    const arr = [];
    let n1 = 0;
    let n2 = 0;
    if (!input || input.length === 0) {
      return [];
    }
    for (let i = 0; i < input.length; i++) {
      if (input[i] <= 0) {
        n2 += input[i];
      } else if (input[i] >= 0) {
        n1 += 1;
      }
    }
    arr.push(n1, n2);
    return arr;
  }