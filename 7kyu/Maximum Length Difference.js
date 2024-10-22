// ❓ DESCRIPTION:
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

// ❗ Solutions

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
      return -1;
    }
    let value1 = 0;
    let value2 = 0;
    let arraA1 = "";
    let arraA2 = "";
    for (let i = 0; i < a1.length; i++) {
      arraA1 += `${a1[i].length},`;
    }
    for (let i = 0; i < a2.length; i++) {
      arraA2 += `${a2[i].length},`;
    }
    let arraA22 = arraA2.split(",");
    for (let i = 0; i < arraA22.length; i++) {
      arraA22[i] = Number(arraA22[i]);
    }
    let arraA11 = arraA1.split(",");
    for (let i = 0; i < arraA11.length; i++) {
      arraA11[i] = Number(arraA11[i]);
    }
    arraA11.sort((a, b) => a - b);
    arraA22.sort((a, b) => a - b);
    value2 = arraA22[arraA22.length - 1] - arraA11[1];
    value1 = arraA11[arraA11.length - 1] - arraA22[1];
    return value1 > value2 ? value1 : value2;
  }