// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice
//    The match result - win/lose/tie
//    A result message - display who won that round

// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors")
//    We'll need a reference to a DOM element to display messages

// 3) Handle a player clicking a button

// 4) Handle generating random selections for the computer player

// 5) Compare the player choice to the computer choice

// 6) Render win/lose/tie message to the player
//include both player and computer selections in the message to clear indicate who won

/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors'];

/*-------------------------------- Variables --------------------------------*/

let playerChoice;
let computerChoice;
let msg;

/*------------------------ Cached Element References ------------------------*/

const resultDisplayEl = document.getElementById('result-display');

/*-------------------------------- Functions --------------------------------*/

const render = () => {
    resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`
}

const compare = () => {
    if (playerChoice === computerChoice) {
      msg = 'You tied!';
    } else if (playerChoice === choices[0] && computerChoice === choices[2]) { 
      // "rock" vs. "scissors"
      msg = 'Congrats! You win!';
    } else if (playerChoice === choices[1] && computerChoice === choices[0]) { 
      // "paper" vs. "rock"
      msg = 'Congrats! You win!';
    } else if (playerChoice === choices[2] && computerChoice === choices[1]) { 
      // "scissors" vs. "paper"
      msg = 'Congrats! You win!';
    } else {
      msg = 'You lose! Try again?';
    }
  };  



const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
}


const getPlayerChoice = (event) => {
    playerChoice = event.target.id;
}

const play = (event) => {
    getPlayerChoice(event);
    getComputerChoice();
    compare();
    render();
};

const reset = () => {
    playerChoice = undefined;
    computerChoice = undefined;
    msg = undefined;
   resultDisplayEl.textContent = "";
}


/*----------------------------- Event Listeners -----------------------------*/

document.getElementById('rock').addEventListener('click', play);
document.getElementById('paper').addEventListener('click', play);
document.getElementById('scissors').addEventListener('click', play);
document.getElementById('reset').addEventListener('click', reset);

/*----------------------------- Event Listeners -----------------------------*/


