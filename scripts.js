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

function playRound(humanChoice,computerChoice){
    console.log(computerChoice)
    console.log(humanChoice)
    computerChoice = computerChoice.toLowerCase()
    humanChoice = humanChoice.toLowerCase()

    while(humanChoice == "paper"){
        if(computerChoice == "rock"){
            console.log("You won! Paper beats Rock")
            humanScore++;
            break;
        }
        if(computerChoice == "scissors"){
            console.log("You lose! Scissors beats Paper")
            computerScore++;
            break;
        }
        break;
    }
    while(humanChoice == "rock"){
        if(computerChoice == "paper"){
            console.log("You lose! Paper beats Rock")
            computerScore++;
            break;
        }
        if(computerChoice == "scissors"){
            console.log("You won! Rock beats Scissors")
            humanScore++;
            break;
        }
        break;
    }
    while(humanChoice == "scissors"){
        if(computerChoice == "paper"){
            console.log("You won! scissors beats paper")
            humanScore++;
            break;
        }
        if(computerChoice == "rock"){
            console.log("You lose! Rock beats Scissors")
            computerScore++;
            break;
        }
        break;
    }
    if(humanChoice == computerChoice){
        console.log("Tie")
    }
}




function playGame(){
    count = 1
    while(count <= 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        count++;
    }
    console.log(computerScore)
    console.log(humanScore)
    if(humanScore > computerScore){
        console.log("You Won the Game")
    } else if(humanScore < computerScore){
        console.log("You Lost the Game")   
    } else {
        console.log("It's a tie")
    }
} 



playGame();