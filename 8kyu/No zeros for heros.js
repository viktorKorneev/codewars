// ❓ Description:
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// ❗ Solutions

function noBoringZeros(n) {
    n = String(n).split("");
    for (let i = n.length - 1; i >= 0; i--) {
      if (n[i] === "0") {
        n.pop();
      } else {
        break;
      }
    }
    return Number(n.join(""));
  }