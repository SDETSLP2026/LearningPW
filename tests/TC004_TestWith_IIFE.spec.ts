//IIFE function - Immediate Invoke Function Expression
//Declare a function inside round brackets and call it immdediately
//Execute these TCs using JS/TS code runner

import { Browser, BrowserContext, Page, chromium } from "@playwright/test";

(function(){

    console.log("Hello All");

})(); //Call the function

(function data(){

    console.log("Test for function data");
    
})(); //Call the function without name

//#######################################################

(async()=>{

    //Browser
    let browser:Browser = await chromium.launch({channel:"msedge", headless:false});
    //BrowserContext
    let browserContext:BrowserContext = await browser.newContext();
    //Page
    let page:Page = await browserContext.newPage();

    await page.goto("https://www.amazon.in");

    //pause
    await page.waitForTimeout(5000);

    console.log(await page.title());
    
    await page.close();
    await browserContext.close();

    
})();