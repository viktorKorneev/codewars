//  ❓ Description:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  let number = 0;
  for (let i = 0; i < x.length; i++) {
    number += +x[i];
  }
  return number;
}
console.log(sumMix([9, 3, "7", "3"]));
