// ❓ Description:
// Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

// Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

// ❗ Solutions

function duplicateElements(m, n) {
  m = m.sort((a, b) => a - b);
  n = n.sort((a, b) => a - b);
  for (let i = 0; i < m.length; i++) {
    for (let y = 0; y < n.length; y++) {
      if (m[i] === n[y]) {
        return true;
      }
    }
  }
  return false
}