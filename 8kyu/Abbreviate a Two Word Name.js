// ❓ DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// ❗ Solutions

function abbrevName(name) {
    let result2 = "";
    let result1 = "";
    let arr1 = [];
    let arr2 = [];
    let str = name.split(" ");
    arr1.push(str[0]);
    arr2.push(str[1]);
    let strArr1 = arr1.join(" ");
    let strArr2 = arr2.join(" ");
    let strNewArr1 = strArr1.split("");
    let strNewArr2 = strArr2.split("");
    result1 = strNewArr1[0];
    result2 = strNewArr2[0];
    return `${result1.toUpperCase()}.${result2.toUpperCase()}`;
  }

//   ----------------------------------------------------

function abbrevName(name) {
    let [firstName, lastName] = name.split(" ");
    return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
  }