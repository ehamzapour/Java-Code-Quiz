var titleItem = document.getElementById("title-item");
var answers = document.getElementById("answers");
var counter = document.getElementById("counter");
var quizQuestions = document.getElementById("quizquestions");
var timer = document.getElementById("timer");
var information = document.getElementById("information");
var btnStart = document.getElementById("btn-start");
var finalScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var currentindex = 0;
var score = 0;
var count = 60;
var alert = document.getElementById("alert");
var otherScores = [];
var savedScores = JSON.parse(localStorage.getItem("userData"));



var questions = [
    {
        title: "Commonly used data types DO Not Include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if/else statement is enclosed within:",
        choices: ["quotes", "curly brackets", "paranthesis", "square brackets"],
        answer: "paranthesis"
    },
    {
        title: "Arrays in Javascript can be used to store ______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "paranthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
]

var otherQuestions

btnStart.addEventListener("click", starQuiz );
function starQuiz(){
    if(savedScores !==null) {
        otherScores = savedScores;
    }
    information.classList.add("d-none")
    btnStart.classList.add("d-none")
    counter.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    otherQuestions = questions[currentindex]
    console.log(otherQuestions.title)

    displayQuestion(otherQuestions)
    gametime()
}


btnScore.addEventListener("click", function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});

function gametime(){
    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);
}

function scorePage(a, b) {
    var userData = {
        inits: a,
        userScore: b
    };
    otherScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(otherScores));
    location.href = "score.html";
}

function displayQuestion(question){
    titleItem.innerText=question.title
    question.choices.forEach(element => {
        var button = document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    answers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}

function displaynextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == otherQuestions.answer)
        answers.innerHTML=""
        if(currentindex < questions.length){
            otherQuestions = questions[currentindex]
            displayQuestion(otherQuestions)
        }else {
            currentindex = 0
            displayQuestion(otherQuestions)
        }
    }else {
        console.log("endgame")
        endgame()
    }
}

function correction(response){
    if(response) {
        alert.innerText="Correct!"
        console.log("Correct!")
    }else {
        alert.innerText="Wrong!"
        count = count -10
        timer.innerHTML = count
        console.log("Wrong!")
    }
    setTimeout(function(){
        alert.innerText=""
         }, 1000);
}

function endgame(){
    finalScore.innerText = count
    addscore.classList.remove("d-none")
    counter.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    addscore.classList.remove("d-none")
}