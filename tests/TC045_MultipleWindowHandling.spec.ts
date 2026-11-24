import { test, expect, Browser, chromium, BrowserContext, Page, Locator } from "@playwright/test";
import { selectSpecificWindow } from "./generics/TestUtil.js";

test("Test for multiple windows", async () => {

    let browser: Browser = await chromium.launch({ channel: "chrome" });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.waitForTimeout(1000);

    let allLinks: Locator[] = await page.locator("//a[@href]").all();
    console.log("Total count of links on the page: " + allLinks.length);

    //Defining array for childWindows
    let childWindow: Page[] = [];

    for (let link of allLinks) {
        //await link.click();

        let [childPage] = await Promise.all([
            context.waitForEvent('page'),
            link.click()
        ])

        //store this page in array
        childWindow.push(childPage);
    }

    console.log("Total pages open: " + context.pages().length);

    //---------------------------------------

    //get the every page title and url
    let allPages: Page[] = context.pages();

    for (let p of allPages) {
        //activate that page
        await p.bringToFront();
        console.log(await p.title());
        console.log(p.url());

    }

    //switch to any specific page: title logic
    await selectSpecificWindow(allPages, "YouTube");

    await page.waitForTimeout(3000);

})