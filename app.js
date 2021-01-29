function populate(){
if(quiz.isEnded()) {
showscores();
}

else {
var element = document.getElementById ("question");
element.innerHTML = quiz.getQuestionIndex().text;


var choices = quiz.getQuestionIndex().choices;
for(var i=0;choices.length; i++) {
var element= document.getElementById("choice" + i);
element.innerHTML = choices[i];
guess("btn" + i, choices[i]);
}

showProgress();
}
};

function guess(id, guess){
var button = document.getElementById(id);
button.onclick = function() {
quiz.guess(guess);
populate();
}
};

function showProgress(){
var currentQuestionNumber = quiz.questionIndex +1;
var element = document.getelementById("progress");
element.innerHTML = "question" + currentQuestionNumber + "of" + quiz.questions.length;
};

function showscore() {
var gameoverHTML = "<h1> result </h1>";
gameoverHTML + "<h2 id='score'> number of vaccines earned :" + quiz.score + "</h2>";
var element = document.getelementById ("quiz");
element.innerHTML = gameoverHTML;
};


var questions= [
new questions("What is the name of the covid vaccine named by the indian government?", ["COVAXIN", "COVARAXIN","COVACCINE","COVID VACCINE"],"COVAXIN")




];


var quiz = new Quiz(questions);


populate;

