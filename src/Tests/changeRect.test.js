const puppeteer = require("puppeteer");

let page;
let browser;
jest.setTimeout(30000);
describe("Edit rectangle", () => {
	beforeEach(async () => {
		//open a chromium browser
		browser = await puppeteer.launch({ headless: true });
		//open a new page within that browser
		page = await browser.newPage();
		await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });
	});
	afterEach(async () => {
		//close the chromium after each test
		await browser.close();
	});

	test("can edit rectangle in the sidebar and the corresponding rectangle will change in the canvas", async () => {
		//click the add Shape button
		await page.waitForSelector("#add-shape");
		await page.click("#add-shape");
		await page.waitForSelector("#shapeWidthInput");
		await page.click("#shapeWidthInput");
		await page.keyboard.press("ArrowDown");
		// get the element in the sideBar list
		const listItem = await page.$(".sidebar__row");
		const canvasItem = await page.$(".rect");
		const widthInListItem = await page.$eval("#shapeWidthInput", e => e.value);
		const widthInCanvasItem = await page.$eval(".rect", e => e.style.width);
		// ASSERTIONS
		expect(listItem).toBeDefined();
		expect(canvasItem).toBeDefined();
		expect(widthInListItem + "px").toBe(widthInCanvasItem);
	});

	test("can do it with nothing rendering but the rectangle and listItem components", async () => {
		//click the add Shape button
		await page.waitForSelector("#add-shape");
		await page.click("#add-shape");
		await page.waitForSelector("#shapeWidthInput");
		await page.click("#shapeWidthInput");
		await page.keyboard.press("ArrowDown");
		// get the element in the sideBar list
		const listItem = await page.$(".sidebar__row");
		const canvasItem = await page.$(".rect");
		const widthInListItem = await page.$eval("#shapeWidthInput", e => e.value);
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
