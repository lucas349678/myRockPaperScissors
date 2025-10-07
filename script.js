    const Rock = "rock"
    const Paper = "paper"
    const Scissors = "scissors"
// If the number is smaller or equal to 33 return Rock
//  else if the number is between 33 and 66 return Paper
// else if the number is higher then 66 let return Scissors

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber <= 33){
        return Rock;
    } else if (randomNumber > 33 && randomNumber <= 66){
        return Paper;
    }else{
        return Scissors;
    }
}


function getHumanChoice(){
    let humanInput = prompt("Rock, Paper or Scissors?")
    humanInput = humanInput.trim().toLowerCase();

    if (humanInput === "rock"){
        return Rock;
    }else if (humanInput === "paper"){
        return Paper;
    }else if(humanInput === "scissors"){
        return Scissors;
    }
}


var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "It's a tie";
    }else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        ){
            humanScore++;
            return "You Win!";
        }else{
            computerScore++;
            return "You Lose!";
        }
}


function playGame() {

    let playAgain = true;

    while (playAgain) {
        humanScore = 0;
        computerScore = 0;

        while (humanScore < 3 && computerScore < 3) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            const roundResult = playRound(humanSelection, computerSelection);

            console.log("Human chose:", humanSelection);
            console.log("Computer chose:", computerSelection);
            console.log(roundResult);
            console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
            console.log("--------------------");
        }

        if (humanScore === 3) {
            console.log("You've won the Game! 🎉");
        } else {
            console.log("You've lost. Better luck next time!");
        }

        playAgain = confirm("Do you want to play again?");
    }

    console.log("Thanks for playing!");
}
