import {test, expect, Browser, webkit, BrowserContext, Page} from "@playwright/test";

test("Test for Authentication popup", async({page})=>{

    //https://<username:password>@domainURL/parameter
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    
    let text:string = await page.locator("div.example").innerText();
    //Assertion for the message
    expect(text).toContain("Congratulations!");
    console.log("Text is: " + text); //Print the message
    
    console.log("BasicAuth test automated!");

   //This test will fail whenever you have some combinational credetials e.g. admin:admin123
})

test("Test for authentication popup with safe technique", async({})=>{

    //we can pass credentials through fixture

    //launch webkit
    let browser:Browser = await webkit.launch();

    //create context
    let context:BrowserContext = await browser.newContext({httpCredentials:{username:"admin", password:"admin"}})

    //open page
    let page:Page = await context.newPage();

    //Open application URL
    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    let text:string = await page.locator("div.example").innerText();
    expect(text).toContain("Congratulations!");
    console.log("Text is: " + text);
    
    console.log("BasicAuth test automated!");
})