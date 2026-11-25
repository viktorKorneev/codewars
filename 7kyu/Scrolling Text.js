// ❓ DESCRIPTION:

// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// "codewars" should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!

// ❗ Solutions

function scrollingText(text) {
  let arrString = [];
  text = text.toUpperCase();
  let str = text;
  arrString.push(text);
  while (text.length > arrString.length) {
    str = str.slice(1) + str.slice(0, 1);
    arrString.push(str);
  }

  return arrString;
}