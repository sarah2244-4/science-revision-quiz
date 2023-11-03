// Question bank object

const questionBank = [
	{
		question: "What is produced in photosynthesis?",
		choices: [
			"Carbon dioxide and water",
			"Carbon dioxide and glucose",
			"Oxygen and glucose",
			"Water and oxygen",
		],
		answer: "oxygen and glucose",
	},
	{
		question: "Select the incorrect statement:",
		choices: [
			"Respiration produces energy",
			"Breathing involves the lungs",
			"Respiration and breathing both happen in every cell",
			"Breathing and respiration are needed to give the body oxygen",
		],
		answer: "Respiration and breathing both happen in every cell",
	},
	{
		question: "Give the correct size order from smallest to largest:",
		choices: [
			"Cell, tissue, organ, organ system, organism",
			"Organism, organ system, organ, tissue, cell",
			"Organism, cell, tissue, organ, organ system",
			"Cell, organism, organ, tissue, organ system",
		],
		answer: "Cell, tissue, organ, organ system, organism",
	},
	{
		question: "Give the main function of sugars in the diet.",
		choices: [
			"To help absorb vitamins",
			"To build up proteins",
			"To provide energy",
			"To help digestion",
		],
		answer: "To provide energy",
	},
	{
		question: "What is a property of a non-metal?",
		choices: ["Shiny", "Malleable", "Ductile", "Brittle"],
		answer: "Brittle",
	},
	{
		question: "What charge does an electron have?",
		choices: ["Neutral", "Negative", "No charge", "Positive"],
		answer: "Negative",
	},
	{
		question: "What number is neutral on the pH scale?",
		choices: ["7", "11", "14", "1"],
		answer: "7",
	},
	{
		question: "What compound does HCl stand for?",
		choices: [
			"Hydrogen chloride",
			"Hydrochloric acid",
			"Hydrogen carbon",
			"Hydrogen chlorine",
		],
		answer: "Hydrochloric acid",
	},
	{
		question: "Give the definition for convection.",
		choices: [
			"The transfer of heat between solids",
			"The transfer of heat with waves",
			"The transfer of heat between liquids",
			"The transfer of heat between fluids",
		],
		answer: "The transfer of heat between fluids",
	},
	{
		question: "What is a series circuit?",
		choices: [
			"A circuit with that splits into 2 branches",
			"A single circuit that doesn't split",
			"A circuit that contains 2 bulbs next to each other",
			"A circuit that isn't complete",
		],
		answer: "A single circuit that doesn't split",
	},
];

// Global variables

const continueButton = document.getElementById("btn-ctn");
const startContainer = document.getElementById("start-container");
const gameContainer = document.getElementById("game-container");
const startButton = document.getElementById("btn-start");
const endScreen = document.getElementById("quiz-end");

const questionDiv = document.getElementById("question");
let choiceOne = document.getElementById("choice-one");
let choiceTwo = document.getElementById("choice-two");
let choiceThree = document.getElementById("choice-three");
let choiceFour = document.getElementById("choice-four");
let buttonOne = document.getElementById("btn-one");
let buttonTwo = document.getElementById("btn-two");
let buttonThree = document.getElementById("btn-three");
let buttonFour = document.getElementById("btn-four");

const fiveQuestions = document.getElementById("five-questions");
const tenQuestions = document.getElementById("ten-questions");

let showQuestionNumber = document.getElementById("question-number");
let currentScore = document.getElementById("current-score");

let selectedQuestions = [];
let currentQuestionIndex = 0;
let selectedChoice;
let numberOfQuestions = 5; // 5 questions generated if not overidden

// Game object

let game = {
	counter: 0,
	currentQuestion: {},
	questionCounter: 1,
};

// Event listeners

document.addEventListener("DOMContentLoaded", () => {
	startButton.addEventListener("click", newGame);
});
buttonOne.addEventListener("click", () => {
	userChoice(choiceOne);
	selectedChoice = choiceOne;
});
buttonTwo.addEventListener("click", () => {
	userChoice(choiceTwo);
	selectedChoice = choiceTwo;
});
buttonThree.addEventListener("click", () => {
	userChoice(choiceThree);
	selectedChoice = choiceThree;
});
buttonFour.addEventListener("click", () => {
	userChoice(choiceFour);
	selectedChoice = choiceFour;
});
fiveQuestions.addEventListener("click", () => {
	numberOfQuestions = 5;
	fiveQuestions.classList.add("active");
	tenQuestions.classList.remove("active");
});
tenQuestions.addEventListener("click", () => {
	numberOfQuestions = 10;
	tenQuestions.classList.add("active");
	fiveQuestions.classList.remove("active");
});
continueButton.addEventListener("click", nextQuestion);

/**
 * Function to start new game
 * when start game button is clicked
 */
function newGame() {
	game.counter = 0; // resets counter to 0
	game.questionCounter = 1; // resets question number to 1
	currentQuestionIndex = 0; // resets current question index from array to 0
	showScore(); // displays score from counter
	startContainer.classList.add("hidden"); // hides start button
	gameContainer.classList.remove("hidden");
	generateQuestions(numberOfQuestions); // generates questions
	showQuestionNumber.innerText = `Question ${game.questionCounter} of ${numberOfQuestions}`;
}

/**
 * Function to display the
 * current score on the page
 */
function showScore() {
	currentScore.innerText = `${game.counter}`;
}

/**
 * Function to generate random order of
 * questions from question bank.
 * Must input a number of questions
 * @param {*} numberOfQuestions
 * @returns
 */
function generateQuestions(numberOfQuestions) {
	let shuffledQuestions = questionBank.sort(() => Math.random() - 0.5); // Shuffle questions in question bank
	selectedQuestions = shuffledQuestions.slice(0, numberOfQuestions); // Slice array to get desired number of questions

	currentQuestion = selectedQuestions[currentQuestionIndex];
	questionDiv.innerText = currentQuestion.question; // Display the question in the question div
	choiceOne.innerText = currentQuestion.choices[0]; // Display the choices in the choice buttons
	choiceTwo.innerText = currentQuestion.choices[1];
	choiceThree.innerText = currentQuestion.choices[2];
	choiceFour.innerText = currentQuestion.choices[3];

	return selectedQuestions;
}

/**
 * Function to change colours and counter when
 * answer choice is selected.
 * @param {*} selectedChoice
 */
function userChoice(selectedChoice) {
	const choiceButtons = document.querySelectorAll(".btn-choice");
	const correctAnswer = currentQuestion.answer;
	for (let i = 0; i < choiceButtons.length; i++) {
		const choice = choiceButtons[i];
		choice.disabled = true;
		choice.classList.remove("green", "red");
		if (choice.querySelector(".choice-answer").innerText === correctAnswer) {
			choice.classList.add("green");
		}
	}

	if (selectedChoice.innerText === currentQuestion.answer) {
		game.counter++;
		selectedChoice.parentElement.classList.add("green"); // If answer is correct, turn the button green
	} else {
		selectedChoice.parentElement.classList.add("red"); // If answer is incorrect, turn the button red
	}
	showScore();
	continueButton.classList.remove("hidden"); // Show the continue button
}

/**
 * Function to display the next question
 * or well done message
 * at end of question array
 */
function nextQuestion() {
	currentQuestionIndex++;
	currentQuestion = selectedQuestions[currentQuestionIndex];
	if (currentQuestionIndex < selectedQuestions.length) {
		game.questionCounter++;
		document.getElementById(
			"question-number"
		).innerText = `Question ${game.questionCounter} of ${numberOfQuestions}`;
		const answerButton = document.querySelectorAll(".choice-answer");
		answerButton.forEach((choice) => {
			choice.parentElement.classList.remove("red", "green"); // Remove color from previous question
		});

		const choiceButtons = document.querySelectorAll(".btn-choice");
		choiceButtons.forEach((choice) => {
			choice.disabled = false;
		});
		continueButton.classList.add("hidden");
		showNextQuestion(); // Display the next question
	} else {
		endQuiz();
	}
}

/**
 * Function to fill in
 * question and answers
 */
function showNextQuestion() {
	const nextQuestion = selectedQuestions[currentQuestionIndex];
	questionDiv.innerText = nextQuestion.question;
	choiceOne.innerText = nextQuestion.choices[0];
	choiceTwo.innerText = nextQuestion.choices[1];
	choiceThree.innerText = nextQuestion.choices[2];
	choiceFour.innerText = nextQuestion.choices[3];
}

/**
 * Function to show well done
 * message at end of quiz
 * and create try again button
 */
function endQuiz() {
	endScreen.innerHTML = `
	<h2>Well done!</h2>
	<p>You got <span class="bold">${game.counter}</span> out of <span class="bold">${numberOfQuestions}</span>`;
	endScreen.classList.remove("hidden");
	continueButton.innerHTML = `Try Again <i class="fa-solid fa-arrow-rotate-right"></i>`;
	continueButton.id = "btn-again";
	continueButton.addEventListener("click", function () {
		window.location.reload();
	});
}
