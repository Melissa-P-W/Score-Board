function showAlert(){
    alert("Click the team score or the up arrow to increase points. \nClick the down arrow to decrease points.");
}

var homeScore = document.getElementById("home-score"); 
var awayScore = document.getElementById("away-score");
var homeCount = 0
var awayCount = 0


function homeIncrement(){
    homeCount += 1 
    homeScore.innerText = homeCount;
}

function homeDecrement(){
    homeCount -= 1 
    homeScore.innerText = homeCount;
}


function awayIncrement(){
    awayCount += 1
    awayScore.innerText = awayCount
}


function awayDecrement(){
    awayCount -= 1
    awayScore.innerText = awayCount
}



