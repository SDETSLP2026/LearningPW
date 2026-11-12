/*
Assignment 11: Select base dropdown
PS: Navigate to https://www.amazon.in/ app
Automate 'All' dropdown near search bar
*/

import {test,expect, Locator} from "@playwright/test"

test("Test for All dropdown automation on the Amazon.in website",async({page})=>{

    await page.goto("https://www.amazon.in");

    let ddAll:Locator = page.locator("//select[@id='searchDropdownBox']");

    // Wait until dropdown is visible
    await expect(ddAll).toBeVisible();

    // Wait until dropdown is enabled
    await expect(ddAll).toBeEnabled();

    /*
    // Get all available dropdown options
    let allOptions:Locator[] = await page.locator("//select[@id='searchDropdownBox']/option").all();
    console.log("Count of all dropdown options: ", allOptions.length);
    
    for(let option of allOptions)
    {
        console.log(await option.innerText());
        if((await option.innerText()).includes("Amazon Fashion"))
        {
            await option.click();
            break;
        }
    }
    */

    // Get all available dropdown options
    const options = await ddAll.locator("option").allTextContents();

    console.log("Available dropdown options:", options);

    // Select Amazon Fashion using label
    await ddAll.selectOption({ label: "Amazon Fashion" });

    // Verify selected option
    await expect(ddAll).toHaveValue("search-alias=fashion");

    console.log("Amazon Fashion selected successfully!");

    await page.waitForTimeout(2000);
})