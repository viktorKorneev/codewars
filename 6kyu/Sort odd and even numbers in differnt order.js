// ❓ DESCRIPTION:
// You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

// Note that zero is an even number. If you have an empty array, you need to return it.

// For example:

// [5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

// odd numbers ascending:   [1, 3,       5   ]
// even numbers descending: [      8, 4,    2]

// ❗ Solutions

function sortArray(array) {
    let odd = [];
    let oddIndex = 0;
    let even = [];
    let evenIndex = 0;
    array.forEach((el) => {
      if (el % 2 !== 0) {
        odd.push(el);
      } else {
        even.push(el);
      }
    });
  
    odd.sort((a, b) => a - b);
    even.sort((a, b) => b - a);
  
    array.forEach((el, i) => {
      if (el % 2 !== 0) {
        array[i] = odd[oddIndex];
        oddIndex++;
      } else {
        array[i] = even[evenIndex];
        evenIndex++;
      }
    });
  
    return array;
  }