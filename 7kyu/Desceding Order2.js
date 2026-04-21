// ❓ DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// ❗ Solutions

function descendingOrder(n) {
  n += "";
  let newString = "";
  let newArr = [];
  for (let i = 0; i < n.length; i++) {
    newArr.push(+n[i]);
  }
  newArr = newArr.sort((a, b) => b - a);
  console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    newString += newArr[i];
  }
  console.log(newString);

  return +newString;
}