// ❓ Description:
// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

// ❗ Solutions

function unusedDigits(...rest) {
  let arrNumbers = rest;
  const objNumbers = {};
  for (let i = 0; i <= 9; i++) {
    objNumbers[i] = i;
  }

  arrNumbers = arrNumbers.join("").split("").map(Number);

  const result = Object.keys(objNumbers).filter((num) => {
    return !arrNumbers.includes(Number(num));
  });

  return result.join("");
}