// ❓ Description:

// Write a function that takes in a string and an object/hash/dict/Dictionary.

// The keys of the dictionary indicate which characters to remove, and the value associated to a key specifies how many instances of this character to remove, in order of appearance in the string from left to right.

// Return the filtered string.

// Examples
// // remove from 'this is a string' the first 1 't' and the first 2 i's.
// "this is a string", {'t':1, 'i':2} ==> "hs s a string"


// // there are no x's or i's, so nothing gets removed
// "hello world", {'x':5, 'i':2} ==> "hello world"

// // we don't have 50 a's, so just remove it till we hit end of string.
// "apples and bananas", {'a':50, 'n':1} ==> "pples d bnns"

// ❗ Solutions

function remove(str, what) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (Object.hasOwn(what, char) && what[char] > 0) {
      str[i] = "";
      what[char] = what[char] - 1;
    }
  }
  return str.join("");
}