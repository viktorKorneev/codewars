// ❓ DESCRIPTION:
// The first element always survives.
// Each next element survives only if it is ≥ the previous survivor.
// The order of the survivors is preserved.
// An empty array remains unchanged.
// Optionally, print "Расстрелять!" to stdout for each eliminated element.
// Examples
// [1, 2, 3, 4, 5]        →  [1, 2, 3, 4, 5]   (all loyal, no executions)
// [5, 3, 1, 2, 4]        →  [5]                (4 executions)
// [1, 2, 2, 3, 1, 4]     →  [1, 2, 2, 3, 4]   (1 execution)
// [3, 1, 4, 1, 5, 9, 2]  →  [3, 4, 5, 9]      (3 executions)
// []                      →  []                (no one to purge)

// ❗ Solutions

function stalinSort(array) {

  if (array.length === 0) {
    return array;
  }

  const newArr = [array[0]];

  for (let i = 1; i < array.length; i++) {
    if (newArr[newArr.length - 1] <= array[i]) {
      newArr.push(array[i]);
    }
  }

  array.splice(0, array.length, ...newArr);

  return array;
}