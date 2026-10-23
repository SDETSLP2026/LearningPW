/*
Multiple elements need these 2 methods
1. allInnerTexts() - Returns an array of node.innerText values for all matching nodes.

2. all() - When the locator points to a list of elements, this returns an array of locators, pointing to their respective elements.

*/

import {test, expect, Locator} from "@playwright/test";


test("Test for multiple elements using cssSelectors with allInnerTexts()",async({page})=>{

    //Open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //Capturing multipple elements
    let allOptions:string[] = await page.locator("div.list-group>a").allInnerTexts();
    
    console.log("Total count of options matched: " + allOptions.length); //13

    //iteration
    for(let option of allOptions){
        console.log(option);
        
    }
})

test.only("Test for multiple elements using cssSelectors with all()",async({page})=>{

    //Open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    let allElements:Locator[] = await page.locator("aside a").all();
    console.log("Total count of elements matched: " + allElements.length); //13

    //iteration
    for(let element of allElements){
        
        console.log(await element.innerText()); //Returns the element.innerText

        if((await element.innerText()).includes("Forgotten Password")){
            await element.click();
            break;
        }
    }

    await page.waitForTimeout(2000);
})