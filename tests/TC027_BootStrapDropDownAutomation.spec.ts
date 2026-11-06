import {test, expect, Locator} from "@playwright/test";

test("Test for RedBus bootstrap/Autosuggestion dropdown", async({page})=>{

    await page.goto("https://www.redbus.in");

    //from dropdown
    await page.locator("#srcinput").fill("Pune");

    await page.waitForTimeout(1000);

    let allOptions:Locator[] = await page.locator("div[class^='listItem'] div[role='heading']").all();
    console.log("Total options are: " + allOptions.length);

    for(let option of allOptions)
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
})

test("Test for jQuery single selection dropdown", async({page})=>{

    await page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/");

    let multiSelectionDD = page.locator("#justAnInputBox");
    let singleSelectionDD:Locator = page.locator("#justAnotherInputBox");
    let multiSelectionCascade = page.locator("#justAnInputBox1");

    await singleSelectionDD.click();

    await page.waitForTimeout(1000);

    //Get the count and print all the options in console
    let allOptions:Locator[] = await page.locator("(//div[@class='comboTreeDropDownContainer'])[3]//li/span[@class='comboTreeItemTitle']").all();
    console.log("Count of total options are: " + allOptions.length);

    for(let option of allOptions)
    {
        console.log(await option.innerText());
        if((await option.innerText()).includes("choice 6 2 1"))
        {
            await option.click();
            break;
        }
    }

    /*
    //Using array.filter()
    allOptions.filter(async(option)=>{
        let element = option.filter({hasText:'choice 6 2 1'});
        element.click();
    })
    //Array.filter() does not execute asynchronous callbacks and does not wait for the click operation.
    */

})

test.only("Test for jQuery single selection dropdown with filter()", async({page})=>{

    await page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/");

    let multiSelectionDD = page.locator("#justAnInputBox");
    let singleSelectionDD:Locator = page.locator("#justAnotherInputBox");
    let multiSelectionCascade = page.locator("#justAnInputBox1");

    await singleSelectionDD.click();

    await page.waitForTimeout(1000);

    //Get the count and print all the options in console
    let allOptions:Locator = page.locator("(//div[@class='comboTreeDropDownContainer'])[3]//li/span[@class='comboTreeItemTitle']");
    console.log("Count of total options are: " + await allOptions.count());

    //Using array.filter() - Array.filter() does not execute asynchronous callbacks and does not wait for the click operation.
    await allOptions.filter({hasText:'choice 6 2 1'}).click();

    await page.waitForTimeout(2000);

})