// Global variables

quizContainer = document.getElementById("container");
ctnBtn = document.getElementById("btn-ctn");
startContainer = document.getElementById("start-container");
gameContainer = document.getElementById("game-container");
score = document.getElementById("current-score");
startButton = document.getElementById("btn-start");
choiceOne = document.getElementById("choice-one");
choicTwo = document.getElementById("choice-two");
choiceThree = document.getElementById("choice-three");
choiceFour = document.getElementById("choice-four");
scoreCount = 0;

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

// Functions

// Document loading shows start screen
window.onload = startScreen();

// Clicking start game presents game screen
function getGameScreen() {}

// Generate random questions from question bank

function getRandomQuestions(numberOfQuestions) {
	// Shuffle the question bank
	const shuffledQuestions = this.shuffleArray(this.questionBank);

	// Select the first n questions
	return shuffledQuestions.slice(0, numberOfQuestions);
}

function shuffleArray(array) {
	// Fisher-Yates (Knuth) Shuffle algorithm
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

const numberOfQuestionsPerQuiz = 10;
const quizQuestions = quiz.getRandomQuestions(numberOfQuestionsPerQuiz);

// Put generated questions into game container
function fillQuestions() {
	for (let question of questionBank) {
		choiceOne.innerText = "${question.choices[0]}";
		choiceTwo.innerText = "${question.choices[1]}";
		choiceThree.innerText = "${question.choices[2]}";
		choiceFour.innerText = "${question.choices[3]}";
	}
}
fillQuestions();

// Getting a question correct changes colour, continue button appears, count increases
function userChoice() {}

// Incorrect answer changes colour, correct answershown, continue button appears
// Clicking continue cycles to next question, continue button removed, question number changes
function nextQuestion() {}
//
