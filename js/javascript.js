
//The function returns a random result of either "Rock", "Paper", or "Scissors".
function getComputerChoice(){
    const computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[getRndInteger(0,2)];
}

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(playerSelection, computerSelection){
    let gameResult;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        gameResult = "It's a draw";
    }

    else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            gameResult = "You Lose! Scissors beats Paper";
        }
        else if(computerSelection === "rock"){
            gameResult = "You Win! Paper beats Rock";
        }
    }

    else if(playerSelection === "rock"){
        if(computerSelection === "scissors"){
            gameResult = "You Win! Rock beats Scissors";
        }
        else if(computerSelection === "paper"){
            gameResult = "You Lose! Paper beats Rock";
        }
    }

    else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            gameResult = "You Lose! Rock beats Scissors";
        }
        else if(computerSelection === "paper"){
            gameResult = "You Win! Scissors beats Rock";
        }
    }

    else{
        gameResult = "Invalid input. Please enter \"Rock\", \"Paper\", or \"Scissors\"";
    }
    //console.log(gameResult);
    return gameResult;
}

/*
function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter \"Rock\", \"Paper\", or \"Scissors\"");
        let result = playRound(playerSelection, getComputerChoice());
        alert(result);
    }
}
*/

//game();

const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const div = document.createElement("div");
document.body.appendChild(div);


rock.addEventListener('click', () => {
    div.textContent = playRound("rock", getComputerChoice());
})

scissors.addEventListener('click', () => {
    div.textContent = playRound("scissors", getComputerChoice());
})

paper.addEventListener('click', () => {
    div.textContent = playRound("paper", getComputerChoice());
})



