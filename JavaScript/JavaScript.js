// User can click to view high scores or start quiz.
// User clicks view highscores and a score page pops up with a button to return to main menu.

// User clicks start to start quiz:
// timer starts on top right 75 seconds begin to count down.
// Question above and four text boxes appear with potential answers to the questions. 
// the background colors change while hovering over the text boxes. 
// on click the next question will pop up, and there will be an indicator at the bottom if the question was correct or incorrect.
// when the timer finishes or all of the questions are answered the score appears, and a box asking for a name to be entered pops up.
// on submit of the form the highscores pop up.


// User clicks start to start quiz:

// timer starts on top right 75 seconds begin to count down.

// Question above and four text boxes appear with potential answers to the questions. 

// var startBtn = document.querySelector('#start');
// var count = 75;



// startBtn.addEventListener('click', startBtn); {
// function startTimer() {
//     var timer = setInterval(function() {
//         count--;
    
//         console.log(count);
    
//         // how can we stop this when count reaches zero? answer: using an if statement.
//         if (count === 0) {
//         clearInterval(timer); // this is how we stop the timer when the variable reaches a certain number.
//         } ;
//     }, 1000);
// }
// }

// count--;

// console.log(count);

// // how can we stop this when count reaches zero? answer: using an if statement.
// if (count === 0) {
// clearInterval(timer); // this is how we stop the timer when the variable reaches a certain number.
// } ;
// }, 1000)

// function countdown() {
// var count = 75;

// var timeInterval = setInterval(function() {
//     count--
//     time
// })



// var count = 10;
// var timerInterval;
// var quizTimer = document.getElementById('timer');
// var startButton = document.getElementById('start');

// timerInterval = setInterval(function(){
//     startButton.addEventListener('click', startButton);
//     count--;
//     quizTimer.textContents = count + 'seconds left';
// }, 1000)


var count = 75;
var timerEl = document.getElementById('timer');
var startButton = document.getElementById('start');


startButton.addEventListener('click', function(){
var timer = setInterval(function() {
    count--;

    console.log(count);

    timerEl.innerText = `${count}`;
    if (count === 0) {

    } ;
}, 1000);})


