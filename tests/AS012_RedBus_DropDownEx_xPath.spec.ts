/*
Assignment 12: Bootstrap dropdown i.e. Non-select tag dropdowns
PS: Navigate to https://www.redbus.in/ app 
Automate "FROM" and "TO" dropdowns.
*/
import {test,expect, Locator} from "@playwright/test";

test("Test for Redbus application for Automate From & To date fields",async({page})=>{

    await page.goto("https://www.redbus.in/", {waitUntil: 'domcontentloaded'});

    
    //From Dropdown
    await page.locator("#srcinput").fill("Pune");
    await page.waitForTimeout(1000);

    let allFromOptions:Locator[] = await page.locator("div[class^='listItem'] div[role='heading']").all();
    console.log("Total FROM location options are: " + allFromOptions.length);

    for(let option of allFromOptions)
    {
        console.log(await option.innerText());

        //Select Katraj, Pune
        if((await option.innerText()).includes("Katraj, Pune"))
        {
            //click
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(2000);

    //---------------------------------------------------------

    //To Dropdown
    await page.locator("#destinput").fill("Mumbai");
    await page.waitForTimeout(1000);

    let allToOptions:Locator[] = await page.locator("div[id^='suggestion'] div[role='heading']").all();
    console.log("Total TO location options are: " + allToOptions.length);

    for(let option of allToOptions)
    {
        console.log(await option.innerText());

        //Select Vashi, Mumbai
        if((await option.innerText()).includes("Vashi, Mumbai"))
        {
            //click
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(2000);

    //---------------------------------------------------------
    
})
