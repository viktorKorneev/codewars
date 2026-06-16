// ❓ DESCRIPTION:
// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']
// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

// ❗ Solutions

function separateTypes(input) {
  const obj = {};
  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] === "number") {
      obj.number = [...(obj.number || []), input[i]];
    } else if (typeof input[i] === "string") {
      obj.string = [...(obj.string || []), input[i]];
    } else {
      obj.boolean = [...(obj.boolean || []), input[i]];
    }
  }
  return obj;
}