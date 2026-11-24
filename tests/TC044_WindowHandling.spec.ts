import { test, expect, chromium, Browser, BrowserContext, Page, Locator } from "@playwright/test";


test("Test for multiple windows - role based application", async () => {

    let browser: Browser = await chromium.launch({ channel: "chrome" });

    //role based testing:open 2 windows
    let context1: BrowserContext = await browser.newContext();
    let context2: BrowserContext = await browser.newContext();

    //Open pages using each context
    let page1: Page = await context1.newPage();
    let page2: Page = await context2.newPage();

    await page1.goto("https://www.saucedemo.com/");
    //login with standard user
    await page1.getByPlaceholder("Username").fill("standard_user");
    await page1.getByPlaceholder("Password").fill("secret_sauce");
    await page1.locator("#login-button").click();

    //assert for pageURL inventory.html
    await expect(page1).toHaveURL(/inventory\.html/); // dot/any special symbol should be used with backslash

    console.log("Number of pages open: " + context1.pages().length);

    await page2.goto("https://www.saucedemo.com/");
    //login with problem user
    await page2.getByPlaceholder("Username").fill("problem_user");
    await page2.getByPlaceholder("Password").fill("secret_sauce");
    await page2.locator("#login-button").click();

    //assert for inventory.html
    await expect(page2).toHaveURL(/inventory\.html/); // dot/any special symbol should be used with backslash

    console.log("Number of pages open: " + context2.pages().length);

    await page2.waitForTimeout(3000);
})

test("Test for multiple window automation", async () => {

    let browser: Browser = await chromium.launch({ channel: "chrome" });
    let context1: BrowserContext = await browser.newContext();
    let page: Page = await context1.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //For window handling process ---> start an event which monitors context.
    //When it found new page - then it returns as child window
    //We are runnig event state and action which opens a new page in parallel.

    let [childWindow] = await Promise.all([

        context1.waitForEvent('page'), //This monitors context

        page.getByText("OrangeHRM, Inc").click() //action which opens new page

    ])

    console.log("Total pages open: " + context1.pages().length);//2

    //get the every page url in console
    let allPages: Page[] = context1.pages();

    for (let p of allPages) {

        await p.bringToFront(); //open that page
        console.log(p.url()); //fetch the page url

    }

    //can i open direct child window and perform operation
    await childWindow.bringToFront();
    await childWindow.locator("//button[text()='Contact Sales']").click();


    //activate main parent window
    await page.bringToFront();
    await page.getByPlaceholder("Username").fill("Admin");

    //close child window
    await childWindow.close();

    await page.waitForTimeout(2000);

})