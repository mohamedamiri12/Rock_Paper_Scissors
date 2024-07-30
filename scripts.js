function getComputerChoice(){
    // randomly return rock, paper or scissors
    let choices = ['rock','paper','scissors']
    let number = Math.floor(Math.random()*3)
    return choices[number]
}
function getHumanChoice(){
    return prompt("what it is your choice?","")
}




let humanScore = 0;
let computerScore = 0;
const body = document.querySelector('body');

const div = document.createElement("div")
div.setAttribute("id", "buttons");

const rockButton = document.createElement("button")
rockButton.textContent = "Rock"

const paperButton = document.createElement("button")
paperButton.textContent = "Paper"

const scissorsButton = document.createElement("button")
scissorsButton.textContent = "Scissors"

div.append(rockButton,paperButton,scissorsButton)

const score = document.createElement("div")

const roundResult = document.createElement("div")
const gameResult = document.createElement("div")


body.append(div,score,roundResult)

let count = 0
function playRound(humanChoice,computerChoice){
    computerChoice = computerChoice.toLowerCase()
    humanChoice = humanChoice.toLowerCase()


    while(humanChoice == "paper"){
        if(computerChoice == "rock"){
            roundResult.textContent = "You won! Paper beats Rock"
            humanScore++;
            score.textContent = `your score : ${humanScore}, computer score : ${computerScore}`
            break;
        }
        if(computerChoice == "scissors"){
            roundResult.textContent = "You lose! Scissors beats Paper"
            computerScore++;
            score.textContent = `your score : ${humanScore}, computer score : ${computerScore}`
            break;
        }
        break;
    }
    while(humanChoice == "rock"){
        if(computerChoice == "paper"){
            roundResult.textContent = "You lose! Paper beats Rock"
            computerScore++;
            score.textContent = `your score : ${humanScore}, computer score : ${computerScore}`
            break;
        }
        if(computerChoice == "scissors"){
            roundResult.textContent = "You won! Rock beats Scissors"
            humanScore++;
            score.textContent = `your score : ${humanScore}, computer score : ${computerScore}`
            break;
        }
        break;
    }
    while(humanChoice == "scissors"){
        if(computerChoice == "paper"){
            roundResult.textContent = "You won! scissors beats paper"
            humanScore++;
            score.textContent = `your score : ${humanScore}, computer score : ${computerScore}`
            break;
        }
        if(computerChoice == "rock"){
            
            roundResult.textContent = "You lose! Rock beats Scissors"
            computerScore++;
            score.textContent = `your score : ${humanScore}, computer score : ${computerScore}`
            break;
        }
        break;
    }
    if(humanChoice == computerChoice){
        console.log(count)
        roundResult.textContent = "Tie"
    }
    if(humanScore == 5){
        gameResult.textContent = "You Won the Game"
    } else if(computerScore == 5){
        gameResult.textContent = "You Lost the Game" 
    } 
    body.appendChild(gameResult)
}





function playGame(humanSelection){
    count = 1
    while(count <= 5){
        const computerSelection = getComputerChoice();
        score.textContent = `your score : ${humanScore}, computer score : ${computerScore}`
        count++;
    }
    if(humanScore > computerScore){
        gameResult.textContent = "You Won the Game"
    } else if(humanScore < computerScore){
        gameResult.textContent = "You Lost the Game" 
    } else {
        gameResult.textContent = "It's a tie"
    }
} 




div.addEventListener('click', (e)=> playRound(e.target.textContent,getComputerChoice()))
