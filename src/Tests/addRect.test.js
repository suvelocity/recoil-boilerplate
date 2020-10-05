const puppeteer = require('puppeteer');

let page;
let browser;
jest.setTimeout(30000);
describe("Can Add a shape from Menu", () => {
	beforeAll(async () => {
		//open a chromium browser
		browser = await puppeteer.launch({ headless: true });
		//open a new page within that browser
		page = await browser.newPage();
		await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });
	});
	afterAll(async () => {
		//close the chromium after each test
		await browser.close();
	});

	test("can do it without the app, and the sideBar component's rendering", async () => {
		// click on the width input and press arrow down to change the menu width value to 74px
		await page.waitForSelector("#root #widthInput");
		await page.click("#root #widthInput");
		await page.keyboard.press("ArrowDown");
		//click the add Shape button
		await page.waitForSelector(
			"#root > .app > .sidebar > .sidebar__menu > button:nth-child(7)"
		);
		await page.click(
			"#root > .app > .sidebar > .sidebar__menu > button:nth-child(7)"
		);
		// get the element in the sideBar list
		const listItem = await page.$(".sidebar__row");
		// get the element at the canvas
		const canvasItem = await page.$(".rect");
		// get the width of both items
		const widthInListItem = await page.$eval(
			"#shapeWidthInput",
			element => element.value
		);
		const widthInCanvasItem = await page.$eval(
			".rect",
			element => getComputedStyle(element).width
		);

		// ASSERTIONS
		expect(listItem).toBeDefined();
		expect(canvasItem).toBeDefined();
		expect(widthInListItem + "px").toBe(widthInCanvasItem);

		// RECOIL state assertions TESTS
		const appRendersCount = await page.evaluate(
			() => document.querySelector("#app-render").innerText
		);
		const canvasRendersCount = await page.evaluate(
			() => document.querySelector("#canvas-render").innerText
		);
		const sideBarRendersCount = await page.evaluate(
			() => document.querySelector("#sideBar-render").innerText
		);
		const sideBarListRendersCount = await page.evaluate(
			() => document.querySelector("#sideBarList-render").innerText
		);

		expect(parseInt(appRendersCount)).toBe(1);
		expect(parseInt(canvasRendersCount)).toBe(3);
		expect(parseInt(sideBarRendersCount)).toBe(1);
		expect(parseInt(sideBarListRendersCount)).toBe(3);
	});
});
