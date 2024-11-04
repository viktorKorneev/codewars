// ❓ Description:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// ❗ Solutions

function high(x){
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let index = 0;
    let result = "";
    let countArr = [];
    let sumArr = [];
    let count = 0;
    x = x.split('')
    for(let i = 0; i < x.length; i++) {
        if(alphabet.includes(x[i])){
            countArr.push(alphabet.indexOf(x[i]) + 1)
            } else if (x[i] === " ") {
                countArr.push(x[i])
            }
    }
    countArr.push(' ');
    
    for(let i = 0; i < countArr.length; i++) {
        if(countArr[i] !== ' ') {
            count+= countArr[i];
        }  else {
            sumArr.push(count)
            count = 0;
        }
    }

x = x.join('').split(' ')
let max = Math.max(...sumArr)

for(let i = 0; i < sumArr.length; i++) {
    if(sumArr[i] === max) {
       index = i
      break
    }
}

return result = x[index];
}