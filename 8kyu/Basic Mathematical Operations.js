// ❓DESCRIPTION:
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// Solutions

function basicOp(operation, value1, value2) {
    let result = (operation === "+") ? value1 + value2 : 
                 (operation === "-") ? value1 - value2 : 
                 (operation === "*") ? value1 * value2 : value1 / value2;
    
    return result;
  }
  basicOp("*", 2, 3);

  // --------------------------------------------------------------------

  function basicOp(operation, value1, value2) {
      let result;
      if (operation === "+") {
        result = value1 + value2;
      } else if (operation === "-") {
        result = value1 - value2;
      } else if (operation === "*") {
        result = value1 * value2;
      } else {
        result = value1 / value2;
      }
      console.log(result);
      return result;
    }
    basicOp("-", 2, 3);

    // ---------------------------------------------------------------------

