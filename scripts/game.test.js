/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore, generateQuestions } = require("./game");

beforeAll(() => {
	let fs = require("fs");
	let fileContents = fs.readFileSync("index.html", "utf-8");
	document.open();
	document.write(fileContents);
	document.close();
});

describe("new game function works correctly", () => {
	beforeAll(() => {
		game.counter = 2;
		document.getElementById("current-score").innerText = "2";
		newGame();
		numberOfQuestions = 2;
	});
	test("score should be set to 0", () => {
		expect(game.counter).toEqual(0);
	});
	test("reset score to 0 in html", () => {
		expect(document.getElementById("current-score").innerText).toEqual("0");
	});
	test("start button to hide when clicked", () => {
		expect(
			document.getElementById("btn-start").classList.contains("hidden")
		).toBe(true);
	});
	test("game container to appear when clicked", () => {
		expect(
			document.getElementById("game-container").classList.contains("hidden")
		).toBe(false);
	});
	test("generate 10 random questions", () => {
		expect(generateQuestions(numberOfQuestions).length).toBe(numberOfQuestions);
	});
	test("question div displays generated question", () => {
		expect(document.getElementById("question").innerText).toBe(
			currentQuestion.question
		);
	});
	test("question displayed first is index 0", () => {
		expect(currentQuestion).toBe(selectedQuestions[0].question);
	});
	test("the question's first choice is displayed as option A", () => {
		expect(document.getElementById("choice-one").innerText).toBe(
			currentQuestion.choices[0]
		);
	});
});

describe("correct answer function works correctly", () => {
	beforeAll(() => {
		game.counter = 0;
		document.getElementById("current-score").innerText = "0";
	});
	test("correct choice box adds correct class", () => {
		expect(document.getElementById("btn-choice"))
			.classList.contains(correct)
			.toBe(true);
	});
});

