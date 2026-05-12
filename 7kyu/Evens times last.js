// ❓ DESCRIPTION:
// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// ❗ Solutions

function evenLast(numbers) {
  if (numbers.length === 0) return 0;
  const evenSum = numbers.reduce((acc, el, i) => {
    return i % 2 === 0 ? acc + el : acc;
  }, 0);
  return evenSum * numbers[numbers.length - 1];
}