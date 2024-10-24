// ❓ Description:
// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

// ❗ Solutions

function smaller(nums) {
    let result = [];
    let count = 0;
    let elem = 0;
    while (result.length !== nums.length) {
      for (let i = elem + 1; i < nums.length; i++) {
        if (nums[elem] > nums[i]) {
          count++;
        }
      }
      result.push(count);
      count = 0;
      elem++;
    }
    return result
  }