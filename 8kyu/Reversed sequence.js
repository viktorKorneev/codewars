// ❓ DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// ❗ Solutions

const reverseSeq = (n) => {
    let newArr = [];
      while (n > 0) {
      newArr.push(n);
      n -= 1;
    }
    return newArr;
  };