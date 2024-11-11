// ❓ Description:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// ❗ Solutions

function solution(string) {
    string = string.split('').join(' ').split('');
    for(let i = 0; i < string.length; i++) {
        if(string[i] === " ") {
            string[i] = ''
        } else if (string[i] === string[i].toUpperCase()) {
            string[i-1] = " "
        }
    }
   
    return string.join('');
  }