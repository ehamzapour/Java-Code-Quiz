var titleitem = document.getElementById("title-item");
var answers = document.getElementById("answers");
var counter = document.getElementById("counter");
var quizquestions = document.getElementById("quizquestions");
var timer = document.getElementById("timer");
var information = document.getElementById("information");
var btnstart = document.getElementById("btn-start");
var finalscore = document.getElementById("score");
var btnscore = document.getElementById("btnscore");
var index = 0;
var score = 0;
var count = 75;
var alert = document.getElementById("alert");
var otherScores = [];
var savedScores = JSON.parse(localStorage.getItem("userData"));