// ❓ DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// ❗ Solutions

function solution(str){
    let word = ''
    for(let i = str.length - 1; i >= 0; i--) {
       word = word + str[i]
    }
    return word
  }
  
  console.log(solution('world'));