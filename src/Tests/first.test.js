const puppeteer = require('puppeteer');


let page;
let browser;
jest.setTimeout(30000);
describe('first test', () => {

  beforeEach(async () => {
    browser = await puppeteer.launch({headless: true});
    page = await browser.newPage();

  })
  afterEach(async () => {
    //  await browser.close();
  })

  test('Can add background color functionality with normal state ', async () => {
    //go to local host
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
    // get the canvas color
    const intialCanvasBackgoroundColor =  await page.$eval('.canvas' ,e=> getComputedStyle(e).backgroundColor);
    //set the input color
    await page.waitForSelector('#root #changeColor')
    await page.click('#root #changeColor')
    // get the canvas color again
    const afterClickCanvasBackgroundColor = await page.$eval('.canvas', e => getComputedStyle(e).backgroundColor);
    // compare the initial color to the color after the change
    expect(intialCanvasBackgoroundColor).not.toBe(afterClickCanvasBackgroundColor);
  })
//   + check that color is changing
// + check app-render co> 0
//+ check that color is changing+ check app-renders is 0
})








function click(x,y){
  var ev = document.createEvent("MouseEvent");
  var el = document.elementFromPoint(x,y);
  ev.initMouseEvent(
      "click",
      true /* bubble */, true /* cancelable */,
      window, null,
      x, y, 0, 0, /* coordinates */
      false, false, false, false, /* modifier keys */
      0 /*left*/, null
  );
  el.dispatchEvent(ev);
}