
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


