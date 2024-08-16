// ❓ DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// ❗ Solutions

function grow(x) {
    let count = 1
    for (let i = 0; i < x.length; i++) {
      count *= x[i] 
    }
    return count;
  }
  console.log(grow([1, 2, 3, 4]));