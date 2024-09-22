// ❓ DESCRIPTION:
// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

// ❗ Solutions

function sumNoDuplicates(numList) {
    let result = 0;
    for (let i = 0; i < numList.length; i++) {
      let value = true;
      for (let j = 0; j < numList.length; j++) {
        if (i !== j && numList[i] === numList[j]) {
          value = false;
        }
      }
      if (value) {
        result += numList[i];
      }
    }
    return result;
  }