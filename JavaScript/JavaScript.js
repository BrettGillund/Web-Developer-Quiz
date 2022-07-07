


// User clicks start to start quiz:
// timer starts on top right 75 seconds begin to count down.
// Question above and four text boxes appear with potential answers to the questions. 
// the background colors change while hovering over the text boxes. 
// on click the next question will pop up, and there will be an indicator at the bottom if the question was correct or incorrect.
// when the timer finishes or all of the questions are answered the score appears, and a box asking for a name to be entered pops up.
// on submit of the form the highscores pop up.
// User can click to view high scores or start quiz.
// User clicks view highscores and a score page pops up with a button to return to main menu.


// User clicks start to start quiz:

// timer starts on top right 75 seconds begin to count down.

// Question above and four text boxes appear with potential answers to the questions. 





// start.addEventListener('click', function(){
// var timer = setInterval(function() {
//     count--;

//     console.log(count);
//     timerEl.innerText = count; // this is how we have our timer element change. 
//     if (count === 0) {
//     clearInterval(timer); // this is how we stop the timer when the variable reaches a certain number.
//     } ;
// }, 1000);})

// timer starts.
// first question populates.
// options populate.

// //making starting menu disapear

// while (count = true) {
//     document.getElementsByClassName(main-menu).style.display = 'none';
// }

// // adding functions to change the text of each question.
// function firstQuestion(){

// }
// questionNum.innerText = `Question 1`;
// questionSection.innerText = 'How often should you push your work to GitHub.com?';

// // answerSection.setAttribute = ('style', 'display: block;');
// disapearStart.setAttribute = ('style', 'display: none;');
// //quiz questions and answers


var timerEl = document.getElementById('timer');
var start = document.getElementById('start');
var questionSection = document.getElementById('question')
// var answerSection = document.getElementsByClassName('answer')
// var questionNum = document.getElementById('questionNum')
// var disapearStart = document.querySelector('.ding')
var time = questions.length * 15;
var timeStart;
var questonIndex = 0;
var optionsEl = document.getElementById('options');
var endCard = document.getElementById('endcard')
var submitForm = document.getElementById('name-entry');
var nameEntered = document.getElementById('entered-name');
var highScorePage = document.getElementById('scorepage');
var lastScore = document.getElementById('high-score');
// var returnMain = document.getElementById('return')

function startTheQuiz() {

    start.style.display = 'none';
    timeStart = setInterval(timeClock, 1000);
    questionSection.style.display = 'block';
    getQuestions();
};

function timeClock() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
}

function getQuestions() {
    var currentQuestion = questions[questonIndex];
    var titleEl = document.getElementById('title');
    titleEl.textContent = currentQuestion.title;
    optionsEl.textContent = ""; // this will clean the previous question.
    currentQuestion.options.forEach(function (option, i) {
        var optionButtons = document.createElement('button');
        optionButtons.setAttribute("value", option);
        optionButtons.textContent = i + 1 + option;
        optionButtons.onclick = checkAnswer;
        optionsEl.appendChild(optionButtons);
    });
}

function checkAnswer() {
    if (this.value !== questions[questonIndex].answer) {
        time -= 5;
        timerEl.textContent = time;
        alert("wrong answer!");
    } else {
        alert('correct!')
    }
    questonIndex++;
    // console.log(questonIndex);
    if (questonIndex === questions.length) {
        endQuiz();
    } else {
        getQuestions();
    }
}

function endQuiz() {
    // console.log('quiz end'); //hide questions. show score. add start button back in. 
    clearInterval(timeStart); // timer stops when endQuiz() is called.
    questionSection.style.display = 'none';
    endCard.style.display= 'block';
};

//create a final page for top scores.

function scorePage() {
    endCard.style.display = 'none';
    lastScore.innerText = localStorage.getItem(`highScore`);
    highScorePage.style.display = 'block';
    var time = questions.length * 15;
};


submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var leaderBoard = nameEntered.value;
    var highScore = [leaderBoard, time];
    localStorage.setItem('highScore', highScore);
    scorePage();
    
});

start.addEventListener('click', startTheQuiz);

// returnMain.addEventListener('click', function restartTheQuiz() {
//     highScorePage.style.display = 'none';
//     time = questions.length * 15;
//     startTheQuiz;
// });


// set questions and options.
// local storage to collect name and score. add this into endQuiz.
// create a score page with updating scores.
