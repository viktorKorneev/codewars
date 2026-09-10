// ❓ DESCRIPTION:
// You need to swap the head and the tail of the specified array:

// the head (the first half) of array moves to the end, the tail (the second half) moves to the start.
// The middle element, if it exists, stays in the same position.

// Return a new array. Do not modify the input.

// For example:

// [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
//  \----/   \----/         
//   head     tail 

// [ -1, 2 ]  => [ 2, -1 ] 
// [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]  

// ❗ Solutions

function swapHeadAndTail(arr) {
  let newArr = [...arr];
  if (newArr.length % 2 === 1) {
    const left = newArr.slice(newArr.length / 2 + 1);
    const rigth = newArr.slice(0, newArr.length / 2);
    const center = newArr.slice(newArr.length / 2, newArr.length / 2 + 1);
    return left.concat(center, rigth);
  } else {
    const left = newArr.slice(newArr.length / 2);
    const rigth = newArr.slice(0, newArr.length / 2);
    return left.concat(rigth);
  }
}