// ❓ DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// ❗ Solutions

function findShort(s){
    const str = s.split(" ").sort((a, b) => a.length - b.length)
    return str[0].length
    }