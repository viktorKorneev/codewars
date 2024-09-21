// ❓ DESCRIPTION:
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// ❗ Solutions

function sumArray(array) {
    let result = 0;
    if (!array) return result
    array.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
      array[0] = 0;
      array[array.length - 1] = 0;
      result += array[i];
    }
  
    return result;
  }