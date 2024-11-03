// ❓ Description:
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// ❗ Solutions

function alphabetPosition(text) {
    let numberAlphabet = [];
    let alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let filterText = text.split('').filter(el => /[a-zA-z]/.test(el));
   
       for(let i = 0; i < filterText.length; i++) {
           if(alphabetLower.includes(filterText[i])) {
               numberAlphabet.push(alphabetLower.indexOf(filterText[i]) + 1);
           } else if (alphabetUpper.includes(filterText[i])) {
               numberAlphabet.push(alphabetUpper.indexOf(filterText[i]) + 1);
           }
       }
      
       return numberAlphabet.join(' ')
   }