// Global variables

quizContainer = document.getElementById("container");
ctnBtn = document.getElementById("btn-ctn");
startContainer = document.getElementById("start-container");
gameContainer = document.getElementById("game-container");
score = document.getElementById("current-score");
startButton = document.getElementById("btn-start");
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
];

// Functions

// Document loading shows start screen

// Clicking start game presents game screen
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

// Getting a question correct changes colour, continue button appears, count increases
// Incorrect answer changes colour, correct answershown, continue button appears
// Clicking continue cycles to next question, continue button removed, question number changes
//
