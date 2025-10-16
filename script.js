const Rock = "rock"
const Paper = "paper"
const Scissors = "scissors"

let humanScore = 0;
let computerScore = 0;


const roundResult = document.querySelector(".roundResult")
const humanSelection = document.querySelector(".humanSelection")
const computerSelection = document.querySelector(".computerSelection")
const humanScoreSpan = document.querySelector(".humScore");
const computerScoreSpan = document.querySelector(".comScore");
const playAgainButton = document.querySelector("#playAgainButton");


function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return Rock;
    if (randomNumber === 1) return Paper;
    return Scissors;
}


function getHumanChoice(humanInput){

    if (humanInput === "rock"){
        return Rock;
    }else if (humanInput === "paper"){
        return Paper;
    }else if(humanInput === "scissors"){
        return Scissors;
    }
}

    document.querySelector("#rock").addEventListener("click", function() {
      const choice = getHumanChoice("rock");
      console.log("You chose:", choice);
    });

    document.querySelector("#paper").addEventListener("click", function() {
      const choice = getHumanChoice("paper");
      console.log("You chose:", choice);
    });

    document.querySelector("#scissors").addEventListener("click", function() {
      const choice = getHumanChoice("scissors");
      console.log("You chose:", choice);
    });



function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        roundResult.textContent = "It's a tie";
    }else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        ){
            humanScore++;
            roundResult.textContent = "You win this Round!";
        }else{
            computerScore++;
            roundResult.textContent = "You Lose this Round!"
        }
    humanSelection.textContent = `Your Selection: ${humanChoice}`
    computerSelection.textContent = `Computer Selection: ${computerChoice}`

    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;

    if(humanScore === 3 || computerScore === 3) {
        if(humanScore === 3){
            roundResult.textContent = "You've Won the Game"
            roundResult.style.color = "green";
        }
        else{
            roundResult.textContent = "You've Lost the Game"
            roundResult.style.color = "red";
        }

        buttons.forEach(button => button.disabled = true);
    }

}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
    roundResult.textContent = "Make your Choice";
    humanSelection.textContent = "Your Selection:";
    computerSelection.textContent = "Computer Selection:";
    buttons.forEach(button => button.disabled = false);
    roundResult.style.color = "blanchedalmond"
}

playAgainButton.addEventListener('click', resetGame);



const buttons = document.querySelectorAll("div.buttons > button")

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })
})





