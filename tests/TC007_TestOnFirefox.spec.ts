import {test, expect, firefox, Browser, Page} from "@playwright/test";

/*
use(): Specifies options or fixtures to use in a single test file or a test.describe([title, details, callback]) group. 
Most useful to set an option
*/

test.use({browserName:'firefox'})
test("Test for Firefox browser", async({page})=>{

    await page.goto("https://www.makemytrip.com/");

    //Assertion for title
    expect(page).toHaveTitle("MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday");

    console.log("The MMT application title is: " + await page.title());

    await page.waitForTimeout(3000);
    
})

test.only("Launch firefox manually", async({})=>{

    let browser: Browser = await firefox.launch({headless: false});

    let page: Page = await (await browser.newContext()).newPage();

    await page.goto("https://www.ixigo.com/");

    console.log("The IXIGO application title is: " + await page.title());

    await page.waitForTimeout(3000);

})