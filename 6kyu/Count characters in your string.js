// ❓ Description:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// ❗ Solutions

function count(string) {
    let obj = {};
    for (let str of string) {
      obj[str] = (obj[str] || 0) + 1;
    }
    return obj;
  }