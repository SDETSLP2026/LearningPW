//testRunner
import {test, chromium, Browser, BrowserContext, Page, APIResponse} from "@playwright/test";



test("Test for Browser --> BrowserContext --> Page --> OpenApplication",async({})=>{

    /*
    Chromium is a browser object
    launch() method: returns the browser instance
    channel: browser distribution channel
    */

    //Open browser
    let browser:Browser = await chromium.launch({channel: "chrome", headless: false});

    //Open browserContext i.e. new session/incognito window
    //browser ---> context: newContext(): Creates a new browser context.
    let browserContext:BrowserContext = await browser.newContext();

    //context ---> page: newPage(): Creates a new page in the browser context.
    let page:Page = await browserContext.newPage();

    //page ---> Application Open
    await page.goto("https://www.google.com/");

    await page.waitForTimeout(4000);

    await page.close();
    await browserContext.close();

})

// Multiple contexts are created in case of multiuser application test where we may need independent sessions for test
test("Test for two isolated windows for two different applications",async({})=>{

    //Browser
    let browser:Browser = await chromium.launch({channel:"msedge", headless:false});
    
    //BrowserContext
    let context1:BrowserContext = await browser.newContext();
    let context2:BrowserContext = await browser.newContext();

    //context1 --> page1
    let page1:Page = await context1.newPage();
    await page1.goto("https://www.automationplayground.com/crm/");
    console.log("Application1 title is: " + await page1.title());
    await page1.waitForTimeout(2000);

    await page1.close();
    await context1.close();
    
    //context2 --> page2
    let page2:Page = await context2.newPage();
    await page2.goto("https://tutorialsninja.com/demo/index.php");
    console.log("Application2 title is: " + await page2.title());
    await page2.waitForTimeout(2000);

    await page2.close();
    await context2.close();
    
})

test("Test for multiple tabs",async({})=>{
    
    //Browser
    let browser:Browser = await chromium.launch({channel:"chrome", headless:false});

    //browser ---> context: newContext(): Creates a new browser context.
    let browserContext:BrowserContext = await browser.newContext();

    //Tab 1 
    let page1:Page = await browserContext.newPage();
    await page1.goto("https://www.gsmarena.com/");
    

    //Tab 2 
    let page2:Page = await browserContext.newPage();
    await page2.goto("https://www.smartprix.com/");
    
    await page2.waitForTimeout(3000);

})

//this is not recommended for framework /production code(not safe to use)
//always follow browser--->context--->page
test("Invalid scenario: Browser--->newTab",async({})=>{

    let browser:Browser=await chromium.launch({channel:'chrome',headless:false});
    /*
    Creates a new page in a new browser context. Closing this page will close the context as well.
    This is a convenience API that should only be used for the single-page scenarios and short snippets. 
    Production code and testing frameworks should explicitly create browser.newContext([options]),
    followed by the browserContext.newPage() to control their exact life times.
    */
    //browser--->newPage
    let page:Page=await browser.newPage();

    await page.goto("https://www.amazon.in");


})

//API Testing:Backend testing

test("Test for GET request API Call",async({request})=>{

    let response:APIResponse=await request.get("https://restful-booker.herokuapp.com/booking");

    console.log("Satatus code is: "+response.status());
    console.log("Status message is: "+response.statusText());
    
    //Body(JSON response)
    let jsonRes=await response.json();
    console.log(jsonRes);


})