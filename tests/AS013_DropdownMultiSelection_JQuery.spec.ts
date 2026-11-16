/*
Assignment 13: Bootstrap dropdown
Navigate to https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/ and 
Automate Multi Selection With Cascade Option Select
*/


import {test, expect, Locator, Page} from "@playwright/test";

test("Test for jQuery Multi Selection With Cascade Option dropdown", async({page})=>{

    await page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/");

    await page.locator("#justAnInputBox1").click();

    let allOptions:Locator = page.locator("(//div[@class='comboTreeDropDownContainer'])[2]//li/span[@class='comboTreeItemTitle']");
    console.log("Count of total options are: " + await allOptions.count());
    
    //Multiple selection - Writing a external method
    await selectMultipleOption(page, allOptions, ["choice 1", "choice 2", "choice 6"]);

    await page.waitForTimeout(3000);

})

async function selectMultipleOption(page:Page, allOptions:Locator, choices:string[])
{
    for(let choice of choices)
    {
        await allOptions.filter({hasText:`${choice}`}).first().click();
    }

}