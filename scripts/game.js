// Question object

const questionBank = [
	{
		question: "What is produced in photosynthesis?",
		choices: [
			"carbon dioxide and water",
			"carbon dioxide and glucose",
			"oxygen and glucose",
			"water and oxygen",
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

const ctnButton = document.getElementById("btn-ctn");
const startContainer = document.getElementById("start-container");
const gameContainer = document.getElementById("game-container");
let scoreDiv = document.getElementById("current-score");
const startButton = document.getElementById("btn-start");

let questionDiv = document.getElementById("question");
let choiceOne = document.getElementById("choice-one");
let choiceTwo = document.getElementById("choice-two");
let choiceThree = document.getElementById("choice-three");
let choiceFour = document.getElementById("choice-four");

let selectedQuestions = [];
let currentQuestionIndex = 0;
let selectedChoice;
let numberOfQuestions;

// Qame object

let game = {
	counter: 0,
	currentQuestion: {},
	questionCounter: 1,
};

// Event Listeners

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("btn-start").addEventListener("click", newGame);
});
document.getElementById("btn-one").addEventListener("click", () => {
	userChoice(choiceOne);
	selectedChoice = choiceOne;
});
document.getElementById("btn-two").addEventListener("click", () => {
	userChoice(choiceTwo);
	selectedChoice = choiceTwo;
});
document.getElementById("btn-three").addEventListener("click", () => {
	userChoice(choiceThree);
	selectedChoice = choiceThree;
});
document.getElementById("btn-four").addEventListener("click", () => {
	userChoice(choiceFour);
	selectedChoice = choiceFour;
});

document.getElementById("btn-ctn").addEventListener("click", nextQuestion);



// Function to start new game when clicking start game
function newGame() {
	game.counter = 0; // resets counter to 0
	game.questionCounter = 1; // resets question number to 1
	currentQuestionIndex = 0; // resets current question index from array to 0
	showScore(); // displays score from counter
	document.getElementById("start-container").classList.add("hidden"); // hides start button
	document.getElementById("game-container").classList.remove("hidden");
	numberOfQuestions = 5; // displays number of questions
	generateQuestions(numberOfQuestions); // generates questions
	document.getElementById(
		"question-number"
	).innerText = `Question ${game.questionCounter} of ${numberOfQuestions}`;
}

// Function to display the current score

function showScore() {
	document.getElementById("current-score").innerText = `${game.counter}`;
}

// Function to generate specific number of random ordered questions

function generateQuestions(numberOfQuestions) {
	let shuffledQuestions = questionBank.sort(() => Math.random() - 0.5);
	selectedQuestions = shuffledQuestions.slice(0, numberOfQuestions); // Slice the shuffled array to get the desired number of questions

	currentQuestion = selectedQuestions[currentQuestionIndex];
	document.getElementById("question").innerText = currentQuestion.question; // Display the question in the question div
	document.getElementById("choice-one").innerText = currentQuestion.choices[0]; // Display the choices in the choice buttons
	document.getElementById("choice-two").innerText = currentQuestion.choices[1];
	document.getElementById("choice-three").innerText =
		currentQuestion.choices[2];
	document.getElementById("choice-four").innerText = currentQuestion.choices[3];

	return selectedQuestions;
}

// Function for choice selected

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
		selectedChoice.parentElement.classList.add("red");
	}
	// If answer is incorrect, turn the button red

	showScore();
	console.log(currentQuestion.answer);
	console.log(selectedChoice.innerText);

	ctnButton.classList.remove("hidden"); // Show the continue button
}

// Function to display next question

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
		ctnButton.classList.add("hidden");

		showNextQuestion(); // Display the next question
	} else {
		endQuiz();
	}
}

function showNextQuestion() {
	const nextQuestion = selectedQuestions[currentQuestionIndex];
	document.getElementById("question").innerText = nextQuestion.question;
	document.getElementById("choice-one").innerText = nextQuestion.choices[0];
	document.getElementById("choice-two").innerText = nextQuestion.choices[1];
	document.getElementById("choice-three").innerText = nextQuestion.choices[2];
	document.getElementById("choice-four").innerText = nextQuestion.choices[3];
}


function endQuiz() {
	const endScreen = document.getElementById("quiz-end");
	endScreen.innerHTML = `
	<h2>Well done!</h2>
	<p>You got <span class="bold">${game.counter}</span> out of <span class="bold">${numberOfQuestions}</span>`;
	endScreen.classList.remove("hidden");
	ctnButton.innerText = "Try Again"; // Add arrow icon
	ctnButton.addEventListener("click", function () {
		window.location.reload();
	});
}

module.exports = {
	game,
	newGame,
	showScore,
	generateQuestions,
	userChoice,
	nextQuestion,
	showNextQuestion,
};
