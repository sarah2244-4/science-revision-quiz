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

// ctnButton.addEventListener("click", nextQuestion);

// Clicking start game presents game screen
function newGame() {
	game.counter = 0;
	game.questionCounter = 0;
	showScore();
	document.getElementById("btn-start").classList.add("hidden");
	document.getElementById("game-container").classList.remove("hidden");
	let numberOfQuestions = 2;
	generateQuestions(numberOfQuestions);
	currentQuestionIndex = 0;
}

function showScore() {
	document.getElementById("current-score").innerText = `${game.counter}`;
}
console.log(game.counter);

// Generate specific number of random ordered questions
function generateQuestions(numberOfQuestions) {
	let shuffledQuestions = questionBank.sort(() => Math.random() - 0.5);
	// Slice the shuffled array to get the desired number of questions
	let selectedQuestions = shuffledQuestions.slice(0, numberOfQuestions);

	
	// Fill in the question div
	for (let i = 0; i < selectedQuestions.length; i++) {
		currentQuestion = selectedQuestions[currentQuestionIndex].question;
		document.getElementById("question").innerText = currentQuestion;
	};

	// Fill in the choices divs
	// choiceFour.forEach(choice => {
	// 	const number = choice.
	// 	choice.innerText = currentQuestion.question;
	// })

	console.log(currentQuestion);
	console.log(selectedQuestions);
	return selectedQuestions;
}

function showQuestions() {
	
}




// Generate question to populate question div
// function fillQuestion() {
// 	const currentQuestion = quizQuestions[game.questionCounter];
// 	questionDiv.innerText = currentQuestion.question;
// 	choiceOne.innerText = currentQuestion.choices[0];
// 	choiceTwo.innerText = currentQuestion.choices[1];
// 	choiceThree.innerText = currentQuestion.choices[2];
// 	choiceFour.innerText = currentQuestion.choices[3];
// }

// Document loading shows start screen
// window.onload = startScreen();

// 	// getRandomQuestions();
// 	// for (let i = 0; i < quizQuestions.length; i++) {
// 	// 	const question = quizQuestions[i];
// 	// 	choiceOne.innerText = `${question.choices[0]}`;
// 	// 	choiceTwo.innerText = `${question.choices[1]}`;
// 	// 	choiceThree.innerText = `${question.choices[2]}`;
// 	// 	choiceFour.innerText = `${question.choices[3]}`;
// 	// }
// }
// fillQuestions();

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
