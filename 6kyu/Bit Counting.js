// ❓ Description:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// ❗ Solutions

var countBits = function (n) {
    let number = "";
    let result = 0;
    while (n >= 1) {
      result = n / 2;
      if (result % 1 !== 0) {
        number += 1;
      } else {
        number += 0;
      }
      n = Math.floor(result);
    }
    return number.split("").filter((el) => el === "1").length;
  };