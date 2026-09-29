// ❓ Description:
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// ❗ Solutions

function smallEnough(a, limit){
 const result = a.filter(e => e <= limit) 
  return a.length === result.length
}