//testRunner
import {test, expect, chromium, Browser, BrowserContext, Page} from "@playwright/test";



test("Test for Browser --> BrowserContext --> Page --> OpenApplication",async({})=>{

    /*
    Chromium is a browser object
    launch() method: returns the browser instance
    channel: browser distribution channel
    */

    //Open browser
    let browser:Browser = await chromium.launch({channel: "chrome", headless: false});

    //Open browserContext i.e. new session/incognito window
    //browser ---> context: runInNewContext(): Creates a new browser context.
    let browserContext:BrowserContext = await browser.newContext();

    //context ---> page: newPage(): Creates a new page in the browser context.
    let page:Page = await browserContext.newPage();

    //page ---> Application Open
    await page.goto("https://www.google.com/");

    await page.waitForTimeout(4000);
})