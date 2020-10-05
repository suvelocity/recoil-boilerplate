const puppeteer = require("puppeteer");

let page;
let browser;
jest.setTimeout(10000);
describe("Can add background color functionality", () => {
	beforeAll(async () => {
		//open a chromium browser
		browser = await puppeteer.launch({ headless: true });
		//open a new page within that browser
		page = await browser.newPage();
		//go to our app
		await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });
	});
	afterAll(async () => {
		//close the chromium after each test
		await browser.close();
	});

	test("using normal state ", async () => {
		const canvasColor = await page.$eval(
			".canvas",
			e => getComputedStyle(e).backgroundColor
		);

		// change color input color to a random color
		await page.waitForSelector("#colorPickerInput");
		await page.click("#colorPickerInput");
		const arrowDown = Math.floor(Math.random() * 50) + 5;
		for (let i = 0; i < arrowDown; i++) {
			await page.keyboard.press("ArrowDown");
		}
		const arrowRight = Math.floor(Math.random() * 50) + 5;
		for (let i = 0; i < arrowRight; i++) {
			await page.keyboard.press("ArrowRight");
		}
		const arrowUp = Math.floor(Math.random() * 15) + 5;
		for (let i = 0; i < arrowUp; i++) {
			await page.keyboard.press("ArrowUp");
		}
		const color = await page.$eval("#colorPickerInput", e => e.value);

		// get canvas background color after the change
		const canvasColorAfter = await page.$eval(".canvas", e => {
			return getComputedStyle(e).backgroundColor;
		});
		// test the the background has been change
		expect(canvasColorAfter).not.toBe(canvasColor);
		// test the the background is equal to the color input value
		expect(rgbToHex(canvasColorAfter)).toBe(color);
	});

	test("without rendering the 'App' component ", async () => {
		const canvasColor = await page.$eval(
			".canvas",
			e => getComputedStyle(e).backgroundColor
		);

		// change color input color to a random color
		await page.waitForSelector("#colorPickerInput");
		await page.click("#colorPickerInput");
		const arrowDown = Math.floor(Math.random() * 50) + 5;
		for (let i = 0; i < arrowDown; i++) {
			await page.keyboard.press("ArrowDown");
		}
		const arrowRight = Math.floor(Math.random() * 50) + 5;
		for (let i = 0; i < arrowRight; i++) {
			await page.keyboard.press("ArrowRight");
		}
		const arrowUp = Math.floor(Math.random() * 15) + 5;
		for (let i = 0; i < arrowUp; i++) {
			await page.keyboard.press("ArrowUp");
		}
		const color = await page.$eval("#colorPickerInput", e => e.value);

		// get canvas background color after the change
		const canvasColorAfter = await page.$eval(".canvas", e => {
			return getComputedStyle(e).backgroundColor;
		});

		const appRendersCount = await page.evaluate(
			() => document.querySelector("#app-render").innerText
		);
		// test the the background has been change
		expect(canvasColorAfter).not.toBe(canvasColor);
		// test the the background is equal to the color input value
		expect(rgbToHex(canvasColorAfter)).toBe(color);
		expect(parseInt(appRendersCount)).toBe(1);
	});
});

function rgbToHex(rgb) {
	const rgbValues = rgb.slice(4, -1).split(", ");
	const hexValues = rgbValues.map(value => {
		const hexString = Number(value).toString(16);
		return hexString.length < 2 ? `0${hexString}` : hexString;
	});
	return `#${hexValues.join("")}`;
}
