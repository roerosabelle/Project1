var person = prompt("Please enter the number of rounds to play");
document.write("You have chosen to play " +person+ " rounds");

var rounds = parseInt(person);

var computerWins = 0
    var userWins = 0
    var bothTie = 0

for (i = 0; i <  rounds; i++) {
    var user = prompt("Please choose rock, paper, or scissors");
    document.write("<br/>" + "You have chosen " + user);
    var computerNumbers = Math.floor(Math.random() * 3) 
   
var computer
if(computerNumbers <= 0) {
    computer = "rock";
} else if(computerNumbers <= 1) {
    computer = "paper";
} else if(computerNumbers <= 2) {
    computer = "scissors";
}

if(user === "scissors" && computer === "rock") {
    alert("You lose!");
    computerWins += 1;
} else if(user === "rock" && computer === "paper") {
    alert("You lose!");
    computerWins += 1;
} else if(user === "paper" && computer === "scissors") {
    alert("You lose!");
    computerWins += 1;
} else if(user === "rock" && computer === "scissors") {
    alert("You win!");
    userWins += 1;
} else if(user === "paper" && computer === "rock") {
    alert("You win!");
    userWins += 1;
} else if(user === "scissors" || computer === "paper") {
    alert("You win!");
    userWins += 1;
} else {
    alert("You tied!");
    bothTie += 1;
}
}

alert("You have won " +userWins+ " times!");
alert("You have lost " +computerWins+ " times!");
alert("You have tied " +bothTie+ " times!");
