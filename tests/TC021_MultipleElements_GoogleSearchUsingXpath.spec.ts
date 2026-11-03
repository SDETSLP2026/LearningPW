import {test, expect} from "@playwright/test";

test("Test for google search scenario using xPath", async({page})=>{

    //Open an application
    await page.goto("https://www.google.com/");

    //Locate search field
    await page.locator("//textarea[@aria-label='Search']").fill("Mocha");

    await page.waitForTimeout(1000);

    let allOptions: string[] = await page.locator("//ul[@role='listbox']/li").allInnerTexts();
    console.log("Total count of all the options: " + allOptions.length);

    for(let option of allOptions){
        console.log(option);
    }
})