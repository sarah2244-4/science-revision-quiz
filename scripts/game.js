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
let currentQuestionIndex = 0;

// Quiz object

let game = {
	counter: 0,
	currentQuestion: {},
	questionCounter: 0,
};

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("btn-start").addEventListener("click", newGame);
});
choiceOne.addEventListener("click", () => userChoice(choiceOne));
choiceTwo.addEventListener("click", () => userChoice(choiceTwo));
choiceThree.addEventListener("click", () => userChoice(choiceThree));
choiceFour.addEventListener("click", () => userChoice(choiceFour));

const choiceButtons = document.querySelectorAll(".btn-choice");
choiceButtons.forEach((choice) => {
	choice.disabled = false;
});

// ctnButton.addEventListener("click", nextQuestion);

// Clicking start game presents game screen
function newGame() {
	game.counter = 0;
	game.questionCounter = 1;
	currentQuestionIndex = 0;
	showScore();
	document.getElementById("btn-start").classList.add("hidden");
	document.getElementById("game-container").classList.remove("hidden");
	let numberOfQuestions = 2;
	generateQuestions(numberOfQuestions);
}

function showScore() {
	document.getElementById("current-score").innerText = `${game.counter}`;
	console.log(game.counter);
}

// Generate specific number of random ordered questions
function generateQuestions(numberOfQuestions) {
	let shuffledQuestions = questionBank.sort(() => Math.random() - 0.5);
	// Slice the shuffled array to get the desired number of questions
	let selectedQuestions = shuffledQuestions.slice(0, numberOfQuestions);

	// Loop selected questions array - is this needed?
	// for (let i = 0; i < selectedQuestions.length; i++) {
	// Fill in the question div
	currentQuestion = selectedQuestions[currentQuestionIndex];
	document.getElementById("question").innerText = currentQuestion.question;
	// Fill in the choices divs
	document.getElementById("choice-one").innerText = currentQuestion.choices[0];
	document.getElementById("choice-two").innerText = currentQuestion.choices[1];
	document.getElementById("choice-three").innerText =
		currentQuestion.choices[2];
	document.getElementById("choice-four").innerText = currentQuestion.choices[3];

	console.log(currentQuestion);
	console.log(selectedQuestions);
	return selectedQuestions;
}

// Function for correct answer
function userChoice(selectedChoice) {
	const choiceButtons = document.querySelectorAll(".btn-choice");
	choiceButtons.forEach((choice) => {
		choice.disabled = true;
	});

	if (selectedChoice.innerText === currentQuestion.answer) {
		game.counter++;
		selectedChoice.classList.add("green");
	} else {
		selectedChoice.classList.add("red");
	}
	console.log(currentQuestion.answer);
	console.log(selectedChoice.innerText);
	console.log(game.counter);
	showScore();
	console.log(choiceButtons);
}

userChoice(selectedChoice);

// Generate question to populate question div
// function fillQuestion() {
// 	const currentQuestion = quizQuestions[game.questionCounter];
// 	questionDiv.innerText = currentQuestion.question;
// 	
// }


// // Getting a question correct changes colour, continue button appears, count increases
// function userChoice(selectedChoice) {
// 	const currentQuestion = quizQuestions[game.questionCounter];
// 	if (selectedChoice === currentQuestion.answer) {
// 		// Handle correct answer (e.g., change color)
// 		// Increment the score
// 		game.score++;
// 	} else {
// 		// Handle incorrect answer (e.g., change color and show the correct answer)
// 	}
// 	// Show the continue button
// 	ctnBtn.style.display = "block";
// }

// // Incorrect answer changes colour, correct answershown, continue button appears
// // Clicking continue cycles to next question, continue button removed, question number changes
// function nextQuestion() {
// 	game.questionCounter++;
// 	if (game.questionCounter < questionBank.length) {
// 		fillQuestions();
// 		// Clear any styling from the previous question
// 		// Hide the continue button
// 		ctnBtn.style.display = "none";
// 	} else {
// 		// Handle the end of the quiz (e.g., show the final score)
// 		// You can add code to display the final score or perform any other action
// 	}
// }
// //

module.exports = {
	game,
	newGame,
	showScore,
	generateQuestions,
};
