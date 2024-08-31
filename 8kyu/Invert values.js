// ❓ DESCRIPTION:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.

// ❗ Solutions

function invert(array) {

    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0 || array[i] > 0){
            array[i] = array[i] * -1 
        } 
    }
    return array;
 }