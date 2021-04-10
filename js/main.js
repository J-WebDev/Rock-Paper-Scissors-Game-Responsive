// variables
var userName = document.querySelector('#user-name');
var ask = prompt("ჩაწერე შენი სახელი:");

var myRock = document.querySelector(".my-rock");
var myPaper = document.querySelector(".my-paper");
var myScissors = document.querySelector(".my-scissors");

var pcRock = document.querySelector(".pc-rock");
var pcPaper = document.querySelector(".pc-paper");
var pcScissors = document.querySelector(".pc-scissors");

var myScore = document.querySelector("#my-score");
var pcScore = document.querySelector("#pc-score");

var myScoreNum = 0;
var pcScoreNum = 0;

var i = 0;
var j = 0;

var gameWinner = document.querySelector("#winner");

var userScoreName = document.querySelector("span");
userScoreName.innerHTML = ask + "ს";

userName.innerHTML = ask;

// Functions for user button colors 
function rockColor() {
    myRock.style.color = "#00ffff";
    myPaper.style.color = "#fff";
    myScissors.style.color = "#fff";
    pcChoice();
    checkForRock();
}

function paperColor(){
    myRock.style.color = "#fff";
    myPaper.style.color = "#00ffff";
    myScissors.style.color = "#fff";
    pcChoice();
    checkForPaper();
}

function scissorsColor(){
    myRock.style.color = "#fff";
    myPaper.style.color = "#fff";
    myScissors.style.color = "#00ffff";
    pcChoice();
    checkForScissors();
}



// Checks player choices and adds scores

// adds scores 
function checkForRock() {
    if(randomNum == 1) {
        ++i;
        pcScore.innerHTML = pcScoreNum + i;
    } 
    if(randomNum == 2) {
        ++j;
        myScore.innerHTML = myScoreNum + j;
    }
}
// adds scores 
function checkForPaper() {
    if(randomNum == 0) {
        ++j;
        myScore.innerHTML = myScoreNum + j;
    } 
    if(randomNum == 2) {
        ++i;
        pcScore.innerHTML = pcScoreNum + i;
    }
}

// adds scores
function checkForScissors() {
    if(randomNum == 0) {
        ++i;
        pcScore.innerHTML = pcScoreNum + i;
    } 
    if(randomNum == 1) {
        ++j;
        myScore.innerHTML = myScoreNum + j;
    } 
}

// checks who is winner and shows name
function whoIsWinner() {
    if(j == 3) {
        gameWinner.innerHTML = "ურაა შენ მოიგე" + "  &#128515;" + "  &#128526;";
        gameWinner.style.color = "#00173d";
    } 
    if(i == 3) {
        gameWinner.innerHTML = "კომპიუტერმა მოიგო" + " &#128533;" + " &#128580;";
        gameWinner.style.color = "#D31244";
    }
}

// generates random numbers for computer
function pcChoice() {
    randomNum = Math.floor(Math.random() * 3);
    if( randomNum == 0) {
        pcRock.style.color = "#00ffff";
        pcPaper.style.color = "#fff";
        pcScissors.style.color = "#fff";
    }else if(randomNum == 1) {
        pcRock.style.color = "#fff";
        pcPaper.style.color = "#00ffff";
        pcScissors.style.color = "#fff";
    } else {
        pcRock.style.color = "#fff";
        pcPaper.style.color = "#fff";
        pcScissors.style.color = "#00ffff";
    }
}
