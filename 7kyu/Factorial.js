// ❓ Description:
// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// ❗ Solutions

function factorial(n) {
    let num = n * (n - 1);
    while (n > 2) {
      n--;
      num *= n - 1;
    }
    if (n === 1 || n === 0) {
      return 1;
    }
    return num;
  }