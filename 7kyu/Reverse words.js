// ❓ DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// ❗ Solutions

function reverseWords(str) {
    let result = [];
    str.split(" ").forEach(el => {
      result.push(el.split("").reverse().join(""));
    });
    return result.join(" ");
  }