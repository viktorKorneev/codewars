// ❓ DESCRIPTION:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// ❗ Solutions

function remove(string) {
    let arr = string.split("");
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === "!") {
        arr.splice(i, 1);
      } else {
        break;
      }
    }
    return arr.join("");
  }