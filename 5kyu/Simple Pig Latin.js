// ❓ DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// ❗ Solutions

function pigIt(str) {
    let ay = "ay";
    let arr2 = [];
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let str = arr[i].split("");
      arr2.push(str);
    }
    for (let i = 0; i < arr2.length; i++) {
      if (/[a-zA-Z]/.test(arr2[i][0])) {
        arr2[i] = arr2[i].slice(1).join("") + arr2[i][0] + ay;
      } else {
        arr2[i] = arr2[i].join("");
      }
    }
  
    return arr2.join(" ");
  }