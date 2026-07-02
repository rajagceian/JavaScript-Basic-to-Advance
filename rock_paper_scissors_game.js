//rock paper scissors game
function playGame(playerChoice,computerChoice){
    if(playerChoice === computerChoice){
        return "It's a tie!";
    } else if((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}
let num = Math.random();
const computerChoice = num < 0.34 ? "rock" : num <= 0.67 ? "paper" : "scissors";
const result = playGame("rock", computerChoice);
console.log(`Player chose rock, computer chose ${computerChoice} : Result => ${result}`);