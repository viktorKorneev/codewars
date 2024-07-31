// DESCRIPTION:
// Create a combat function that takes the player's current health and the amount of damage recieved, and 
// returns the player's new health. Health can't be less than 0.

// Solution

function combat(health, damage) {
    let result = health - damage;
    if (result <= 0) {
      return 0;
    } else {
      return result;
    }
  }
  result = combat(40, 30);
  console.log(result);