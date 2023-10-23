/**
 * @jest-environment jsdom
 */

const { game, newGame, score, showScore } = require("./game");

jest.spyOn(window, "alert").mockImplementation(() => {});

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
		newGame();
	});
	test("score should be set to 0", () => {
		expect(game.counter).toEqual(0);
	});
	test("reset score to 0 in html", () => {
		expect(score.innerText).toEqual(0);
	});
});