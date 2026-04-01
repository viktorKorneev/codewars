// ❓ Description:
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, fofunction findSmallestInt(arr) {
  function findSmallestInt(arr) {
  let smallNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallNumber) {
      smallNumber = arr[i];
    }
  }
  return smallNumber;
}