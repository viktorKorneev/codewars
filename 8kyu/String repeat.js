// ❓ DESCRIPTION:
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// ❗ Solutions

function repeatStr (n, s) {
    let count = ""
  
    for(let i = 0; i < n; i++){
        count += s
      }
    
    return count;
  }
  console.log(repeatStr(5, "ha "));