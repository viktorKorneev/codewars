// ❓ DESCRIPTION:
// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

// ❗ Solutions

function whatday(num) {
    return num === 1
      ? "Sunday"
      : num == 2
      ? "Monday"
      : num == 3
      ? "Tuesday"
      : num == 4
      ? "Wednesday"
      : num == 5
      ? "Thursday"
      : num == 6
      ? "Friday"
      : num == 7
      ? "Saturday"
      : "Wrong, please enter a number between 1 and 7";
  }