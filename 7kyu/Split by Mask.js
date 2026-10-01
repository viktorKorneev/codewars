// ❓ DESCRIPTION:
// Given a xs and a mask (a list of lengths), split the string into its parts accordingly.

// Examples:
// |     xs        |  Mask (lengths) |          Output           |
// |---------------|-----------------|---------------------------|
// |  "1234567890" |  [3, 3, 4]      |  ["123", "456", "7890"]   |
// |  "codewars"   |  [4, 4]         |  ["code", "wars"]         |
// Notes:
// The mask only contains strictly positive integers.
// A mask is valid if and only if the sum of the lengths is equal to the length of the string.
// Otherwise, return None.

// ❗ Solutions

function split(string, mask) {
  let array = [];
  let sum = mask.reduce((el, acc) => acc + el, 0);
  if (sum === string.length) {
    for (let i = 0; i < mask.length; i++) {
      const length = mask[i];
      array.push(string.slice(0, length));
      string = string.slice(length);
    } 
  } else {
      return null
    }
  return array;
}