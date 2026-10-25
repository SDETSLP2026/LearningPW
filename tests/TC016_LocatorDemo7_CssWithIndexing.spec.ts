import {test, expect} from "@playwright/test";

test.only("Test for multiple elements using cssSelectors with nth-child(index)",async({page})=>{

    //Open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //cssSelector with index
    // let text1:string = await page.locator("div.list-group>a:nth-child(7)").innerText();
    // console.log("The captured text is: " + text1);

    let text1:string = await page.locator("div.list-group>a").nth(6).innerText();
    console.log("The captured text is: " + text1);
    

    //Use of count() - locator.count()
    //Returns Promise<number> i.e. the number of elements matching the locator.

    let totalElements:number = await page.locator("div.list-group>a").count();
    console.log("Total options from list: " + totalElements);
    




})