import {test, expect, Locator} from "@playwright/test";

test("Test for interaction with Google Search box", async({page})=>{

    //Open application
    await page.goto("https://www.google.com");

    //Strategy 1: Identify Element + Store Element + Validation + Action
    /*
    Locator(): The method returns an element locator that can be used to perform actions on this page / frame. 
    Locator is resolved to the element immediately before performing an action, so a series of actions 
    on the same locator can in fact be performed on different DOM elements. 
    That would happen if the DOM structure between those actions has changed.
    */
   
    /*
    let searchBox:Locator = page.locator("textarea[name='q']");

    //validation
    console.log("Is my search box visible? :" + await searchBox.isVisible());
    console.log("Is my search box enable? :" + await searchBox.isEnabled());
    console.log("Is my search box editable? :" + await searchBox.isEditable());

    //Action commands
    searchBox.fill("Playwright");

    //debugging command - pause
    await page.waitForTimeout(2000);

    */

    //Strategy 2: Identify Element + Perform Action

    await page.locator("textarea[name='q']").fill("Playwright");
})

//Autowait & errorneous code
test.only("Test for autowaiting", async({page})=>{

    await page.goto("https://www.google.com");

    let searchBox:Locator = page.locator("textarea[name='Sigma']");//Error: locator.fill: Test timeout of 30000s exceeded.
    
    //Perform Action
    searchBox.fill("Selenium");
})