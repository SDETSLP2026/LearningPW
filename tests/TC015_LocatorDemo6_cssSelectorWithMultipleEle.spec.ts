/*
Multiple elements need these 2 methods
1. allInnerTexts() - Returns an array of node.innerText values for all matching nodes.

2. all()

*/

import {test, expect} from "@playwright/test";


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