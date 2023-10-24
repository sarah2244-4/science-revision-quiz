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

// Quiz object

let game = {
	counter: 0,
	currentQuestion: {},
	choices: ["button1", "button2", "button3", "button4"],
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
	generateQuestions();
	const totalQuestions = allQuestions.length;
	fillQuestion();
}

function showScore() {
	document.getElementById("current-score").innerText = `${game.counter}`;
}
console.log(game.counter);

// Generate specofic number of random ordered questions 
function generateQuestions(numberOfQuestions) {
	const shuffledQuestions = questionBank.sort(() => Math.random() - 0.5);
    // Slice the shuffled array to get the desired number of questions
    const selectedQuestions = shuffledQuestions.slice(0, numberOfQuestions);

    // Make sure the first question is at index 0
    if (selectedQuestions.length > 0) {
        const firstQuestion = selectedQuestions[0];
        selectedQuestions.splice(0, 1); // Remove the first question from the array
        selectedQuestions.unshift(firstQuestion); // Put the first question back at index 0
    }

    return selectedQuestions;
}


// function shuffleQuestions(array) {
// 	// Fisher-Yates (Knuth) Shuffle algorithm
// 	for (let i = array.length - 1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * (i + 1));
// 		[array[i], array[j]] = [array[j], array[i]];
// 	}
// 	return array;
// }

// Generate question to populate question div
function fillQuestion() {
	const currentQuestion = quizQuestions[game.questionCounter];
	questionDiv.innerText = currentQuestion.question;
	choiceOne.innerText = currentQuestion.choices[0];
	choiceTwo.innerText = currentQuestion.choices[1];
	choiceThree.innerText = currentQuestion.choices[2];
	choiceFour.innerText = currentQuestion.choices[3];
}

// Functions

// Document loading shows start screen
// window.onload = startScreen();

// Generate random questions from question bank


// const numberOfQuestionsPerQuiz = 10;
// const quizQuestions = quiz.getRandomQuestions(numberOfQuestionsPerQuiz);



// 	// getRandomQuestions();
// 	// for (let i = 0; i < quizQuestions.length; i++) {
// 	// 	const question = quizQuestions[i];
// 	// 	choiceOne.innerText = `${question.choices[0]}`;
// 	// 	choiceTwo.innerText = `${question.choices[1]}`;
// 	// 	choiceThree.innerText = `${question.choices[2]}`;
// 	// 	choiceFour.innerText = `${question.choices[3]}`;
// 	// }
// }
// newGame();
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
};
