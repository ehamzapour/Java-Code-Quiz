var savedScores = JSON.parse(localStorage.getItem("userData"));
var scoresList = document.querySelector("#scoresList");
var backBtn = document.querySelector("#backButton");
var clearBtn = document.querySelector("#clearScores");

function displayScores() {
    if (savedScores !== null) {
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListt";
        
    }
}