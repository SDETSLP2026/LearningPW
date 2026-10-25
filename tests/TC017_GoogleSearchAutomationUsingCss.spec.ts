import {test, expect} from "@playwright/test";

test("Test for Google Search scenario",async({page})=>{

    //Open application
    await page.goto("https://www.google.com/");

    //Search for a keyword 'Playwright'
    await page.locator("textarea[name='q']").fill("Playwright");

    //Pause
    await page.waitForTimeout(2000);

    //Get the list of options: ul[role='listbox']>li - 10 options
    let allOptions:string[] = await page.locator("ul[role='listbox']>li").allInnerTexts();
    console.log("Total count of search options: " + allOptions.length);

    for(let option of allOptions){
        console.log(option);
    }
    
})