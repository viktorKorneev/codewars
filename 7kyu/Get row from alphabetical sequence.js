// Description:
// Task
// Implement a function which takes a number N and returns the N'th row of the sequence below. If the argument is greater than the number of rows in the sequence, then start from the beginning again, e.g. row 27 is the same as row 1.

// Sequence
// 1:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
// 2:  BBCDEFGHIJKLMNOPQRSTUVWXYZ
// 3:  CCCDEFGHIJKLMNOPQRSTUVWXYZ
// 4:  DDDDEFGHIJKLMNOPQRSTUVWXYZ
// 5:  EEEEEFGHIJKLMNOPQRSTUVWXYZ
// 6:  FFFFFFGHIJKLMNOPQRSTUVWXYZ
// 7:  GGGGGGGHIJKLMNOPQRSTUVWXYZ
// 8:  HHHHHHHHIJKLMNOPQRSTUVWXYZ
// 9:  IIIIIIIIIJKLMNOPQRSTUVWXYZ
// 10: JJJJJJJJJJKLMNOPQRSTUVWXYZ
// 11: KKKKKKKKKKKLMNOPQRSTUVWXYZ
// 12: LLLLLLLLLLLLMNOPQRSTUVWXYZ
// 13: MMMMMMMMMMMMMNOPQRSTUVWXYZ
// 14: NNNNNNNNNNNNNNOPQRSTUVWXYZ
// 15: OOOOOOOOOOOOOOOPQRSTUVWXYZ
// 16: PPPPPPPPPPPPPPPPQRSTUVWXYZ
// 17: QQQQQQQQQQQQQQQQQRSTUVWXYZ
// 18: RRRRRRRRRRRRRRRRRRSTUVWXYZ
// 19: SSSSSSSSSSSSSSSSSSSTUVWXYZ
// 20: TTTTTTTTTTTTTTTTTTTTUVWXYZ
// 21: UUUUUUUUUUUUUUUUUUUUUVWXYZ
// 22: VVVVVVVVVVVVVVVVVVVVVVWXYZ
// 23: WWWWWWWWWWWWWWWWWWWWWWWXYZ
// 24: XXXXXXXXXXXXXXXXXXXXXXXXYZ
// 25: YYYYYYYYYYYYYYYYYYYYYYYYYZ
// 26: ZZZZZZZZZZZZZZZZZZZZZZZZZZ

// ❗ Solutions

function getRow(n) {
    let el;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    alphabet = alphabet.split("");
    n = n % alphabet.length;
    if (n === 0){
      n = alphabet.length
    } 
    for (let i = 0; i < alphabet.length; i++) {
      if (n === i + 1) {
        el = alphabet[i];
      }
    }
  
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] !== el) {
        alphabet[i] = el;
      } else {
        break;
      }
    }
  
    return alphabet.join("");
  }