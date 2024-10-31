// ❓ Description:
// In genetic the reverse complement of a sequence is formed by reversing the sequence and then taking the complement of each symbol.

// The four nucleotides in DNA is Adenine (A), Cytosine (C), Guanine (G) and Thymine (Thymine).

// A is the complement of T
// C is the complement of G.
// This is a bi-directional relation so:

// T is the complement of A
// G is the complement of C.
// For this kata you need to complete the reverse complement function that take a DNA string and return the reverse complement string.

// Note: You need to take care of lower and upper case. And if a sequence conatains some invalid characters you need to return "Invalid sequence".

// ❗ Solutions

function reverseComplement(dna) {
    let arr = ["A", "T", "C", "G", "a", "t", "c", "g"];
    let arrDna = dna.split("").reverse();
    for (let i = 0; i < arrDna.length; i++) {
      if (!arr.includes(arrDna[i])) {
        return "Invalid sequence";
      } else if (arrDna[i] === "A") {
        arrDna[i] = "T";
      } else if (arrDna[i] === "T") {
        arrDna[i] = "A";
      } else if (arrDna[i] === "C") {
        arrDna[i] = "G";
      } else if (arrDna[i] === "G") {
        arrDna[i] = "C";
      } else if (arrDna[i] === "a") {
        arrDna[i] = "t";
      } else if (arrDna[i] === "t") {
        arrDna[i] = "a";
      } else if (arrDna[i] === "c") {
        arrDna[i] = "g";
      } else {
        arrDna[i] = "c";
      }
    }
    return arrDna.join("");
  }