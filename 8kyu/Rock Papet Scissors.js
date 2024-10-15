// ❓ DESCRIPTION:
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// ❗ Solutions

const rps = (p1, p2) => {
    let result = "";
    let rock = "rock";
    let scissors = "scissors";
    let paper = "paper";
    if (p1 === p2) {
      return (result = "Draw!");
    } else if (
      (p1 === rock && p2 === scissors) ||
      (p1 === scissors && p2 === paper) ||
      (p1 === paper && p2 === rock)
    ) {
      return (result = "Player 1 won!");
    } else {
      return (result = "Player 2 won!");
    }
  };