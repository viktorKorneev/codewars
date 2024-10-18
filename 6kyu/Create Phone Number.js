// ❓ DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// ❗ Solutions

function createPhoneNumber(numbers) {
    let end = [];
    let center = [];
    let start = [];
    numbers.join("");
    for (let i = 0; i < numbers.length - 7; i++) {
      start.push(numbers[i]);
    }
    let start1 = start.join("");
    start1 = `(${start1}) `;
    for (let i = 3; i < numbers.length - 4; i++) {
      center.push(numbers[i]);
    }
    let center1 = center.join("");
    center1 = `${center1}-`;
    for (let i = 6; i < numbers.length; i++) {
      end.push(numbers[i]);
    }
    let end1 = end.join("");
    end1 = `${end1}`;
    return start1 + center1 + end1;
  }