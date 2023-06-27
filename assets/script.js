
//Quiz Questions
const quizQuestions = [
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Stuff", "Calculating Skill Show", "Cats Shouldn't Sing"],
        answer: 0
    },
    {
        question: "An 'if then' statement could be simplified using which two symbols?",
        options: ["? :", "! @", "# $", "& *"],
        answer: 0
    },
    {
        question: "The HT in HTML stands for what?",
        options: ["HyperText", "HighTest", "HungaryTurkey", "HypotheticalTerms"],
        answer: 0
    },
    {
        question: "Who invented the internet?",
        options: ["Al Gore", "Bill Gates", "Steve Jobs", "Tim Berners-Lee"],
        answer: 3
    },
    {
        question: "The .md in README.md is short for what?",
        options: ["ManDark", "MoreData", "MarkDown", "MetaData"],
        answer: 2
    }
];

//Variables
let currentQuestion = 0;
let score = 0;
let timeLeft = 0;
let timerInterval;

//DOM Elements
const startButton = document.getElementById("start");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const feedBackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const initialsInput = document.getElementById("initials");
const scoreForm = document.getElementById("score-form");
const timerElement = document.getElementById("time");


//Event listeners
startButton.addEventListener("click", startQuiz);
optionsContainer.addEventListener("click", checkAnswer);
scoreForm.addEventListener("submit", saveScore);

// Functions
function startQuiz() {
    startButton.style.display = "none";
    timeLeft = 60;
    score = 0;
    showQuestion();
    startTimer();
    showQuiz();
}

function showQuiz() {
    document.getElementById("quiz").style.display = "block";
}

function showQuestion() {
    const question = quizQuestions[currentQuestion];
    questionElement.textContent = question.question;
    optionsContainer.innerHTML = "";
    for (let i = 0; i < question.options.length; i++) {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option");
        optionButton.textContent = question.options[i];
        optionsContainer.appendChild(optionButton); 
    }
}

function checkAnswer(event) {
    if (event.target.classList.contains("option")) {
      const selectedOption = event.target;
      const question = quizQuestions[currentQuestion];
      const selectedAnswer = Array.from(optionsContainer.children).indexOf(selectedOption);
      const isCorrect = selectedAnswer === question.answer;
  
      if (isCorrect) {
        score++;
        feedbackElement.textContent = "Correct!";
      } else {
        timeLeft -= 10;
        feedbackElement.textContent = "Wrong!";
      }
  
      currentQuestion++;
      if (currentQuestion < quizQuestions.length) {
        showQuestion();
      } else {
        endQuiz();
      }
    }
  }
  
  function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById("quiz").style.display = "none";
    document.getElementById("game-over").style.display = "block";
    scoreElement.textContent = score;
  }
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;
  
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  function saveScore(event) {
    event.preventDefault();
    const initials = initialsInput.value.trim();
  
    if (initials) {
      // Save the initials and score here
      console.log("Initials:", initials);
      console.log("Score:", score);
      // You can store the scores using local storage or send them to a server
      // Example: localStorage.setItem("highScores", JSON.stringify({ initials, score }));
    }
  }
  