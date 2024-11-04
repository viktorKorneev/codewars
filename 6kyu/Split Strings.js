// ❓ Description:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// ❗ Solutions

function solution(str) {
    if (str.length % 2 !== 0) str += "_";
    let result = [];
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
      str[i] += str[i + 1];
      result.push(str[i]);
      i++;
    }
  
    return result;
  }