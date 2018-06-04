$(document).ready(function() {

let wins = 0;
    $("#wins").text("Wins: " + wins);
let losses = 0;
    $("#losses").text("Losses: " + losses);
let currentTotal = 0;

let goal =  Math.floor(Math.random() * 101 + 19)
    console.log("Current Goal: " + goal);
    $("#goal").text("Current Goal: " + goal);

$("#userTotal").text("Current Total: " + currentTotal);

blueValue = (Math.floor(Math.random() * 12 + 1));
console.log("Blue is: " + blueValue);
pinkValue = (Math.floor(Math.random() * 12 + 1));
console.log("Pink is: " + pinkValue);
silverValue = (Math.floor(Math.random() * 12 + 1));
console.log("Silver is: " + silverValue);
purpleValue = (Math.floor(Math.random() * 12 + 1));
console.log("Purple is: " + purpleValue);

function generateGoal() {
    goal = Math.floor(Math.random() * 101 + 19)
    console.log("Current Goal is " + goal);
    $("#goal").text("Current Goal is: " + goal);
}

function crystalsValueGenerator() {
    blueValue = (Math.floor(Math.random() * 12 + 1));
    console.log("Blue is: " + blueValue);
    pinkValue = (Math.floor(Math.random() * 12 + 1));
    console.log("Pink is: " + pinkValue);
    silverValue = (Math.floor(Math.random() * 12 + 1));
    console.log("Silver is: " + silverValue);
    purpleValue = (Math.floor(Math.random() * 12 + 1));
    console.log("Purple is: " + purpleValue);
}

function newGame() {
    generateGoal();
    crystalsValueGenerator();
    currentTotal = 0;
    $("#goal").text("Target Score: " + goal);
    $("#userTotal").text("Current Score: " + currentTotal);
}

function winning() {
    alert("You won!")
    wins++;
    $("#wins").text("Wins: " + wins);
    newGame();
} 

function losing() {
    alert("You lost!")
    losses++;
    $("#losses").text("Losses: " + losses);
    newGame();
}

$("#blue").on("click", function() {
    currentTotal = currentTotal + blueValue;
    $("#userTotal").text("Current Total: " + currentTotal);
    if (currentTotal === goal) {
        winning();
    }
    else if (currentTotal > goal) {
        losing();
    }

})

$("#pink").on("click", function() {
    currentTotal = currentTotal + pinkValue;
    $("#userTotal").text("Current Total: " + currentTotal);
    if (currentTotal === goal) {
        winning();
    }
    else if (currentTotal > goal) {
        losing();
    }
    
})

$("#silver").on("click", function() {
    currentTotal = currentTotal + silverValue;
    $("#userTotal").text("Current Total: " + currentTotal);
    if (currentTotal === goal) {
        winning();
    }
    else if (currentTotal > goal) {
        losing();
    }
    
})

$("#purple").on("click", function() {
    currentTotal = currentTotal + purpleValue;
    $("#userTotal").text("Current Total: " + currentTotal);
    if (currentTotal === goal) {
        winning();
    }
    else if (currentTotal > goal) {
        losing();
    }
    
})
   








});