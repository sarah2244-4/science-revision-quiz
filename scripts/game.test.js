/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore } = require("./game");

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
});

