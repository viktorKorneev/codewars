// ❓ DESCRIPTION:
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]

// ❗ Solutions

function digitize(n) {
    return n = String(n).split("").reverse().map(e => Number(e))
  }