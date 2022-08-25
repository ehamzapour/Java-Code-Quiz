var savedScores = JSON.parse(localStorage.getItem("userData"));
var scoresList = document.querySelector("#scoresList");
var backBtn = document.querySelector("#backButton");
var clearBtn = document.querySelector("#clearScores");

function displayScores() {
    if (savedScores !== null) {
        var scoreList = document.createElement("ol");
        scoreList.className = "highScoreClass";
        for (var i=0; i < savedScores.length; i++){
            var initials = savedScores[i].inits;
            var scores = savedScores[i].userScore
            var scoreName = document.createElement("li");
            scoreName.innerHTML = initials + "-" + scores;
            scoreList.appendChild(scoreName);
        }
        scoresList.appendChild(scoreList);
    }
};

displayScores();

backBtn.addEventListener("click", function(){
    location.href = "index.html";
});

clearBtn.addEventListener("click", function(){
    scoresList.innerHTML = "";
    window.localStorage.clear();
});