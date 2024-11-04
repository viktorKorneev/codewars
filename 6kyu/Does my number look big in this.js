// ❓ Description:
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

// ❗ Solutions

function narcissistic(value) {
    value = String(value).split("");
    if (value.length < 2) return true;
    let multi = value.length - 1;
    let count = 0;
    let arr = [];
    value.forEach((el) => arr.push(el));
  
    while (count < multi) {
      for (let i = 0; i < value.length; i++) {
        if (count <= multi) {
          value[i] *= arr[i];
        }
      }
      count++;
    }
  
    let result = value.reduce((ac, cur) => ac + cur);
    value = Number(arr.join(""));
    return result === value;
  }