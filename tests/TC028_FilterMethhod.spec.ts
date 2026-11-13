import {test, expect, Locator} from "@playwright/test";

test("Test for footer scenario", async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php");

    // let allFooterLinks:Locator[] = await page.locator("footer a").all();

    //with Array for-of loop
    // for(let footerLink of allFooterLinks)
    // {

    // }

    let allFooterLinks:Locator = page.locator("footer a");
    console.log("Count of total footer links: " + await allFooterLinks.count()); //16
    
    //Using locator.filter() - This method narrows existing locator according to the options, for example filters by text. 
    // It can be chained to filter multiple times.
    await allFooterLinks.filter({hasText:'Brands'}).click();

    await page.waitForTimeout(2000);

})

test.only("Test for Amazon search with filter()", async({page})=>{

    await page.goto("https://www.amazon.in/");

    await page.locator("#twotabsearchtextbox").fill("Samsung");

    await page.waitForTimeout(1500);

    //list
    let allOptions:Locator = page.locator("div.s-suggestion"); //total 10

    //If the elements are dynamic, the code won't work
    let ele:Locator = allOptions.filter({hasText:'a36 5g'});
    console.log("Text is: " + await ele.innerText());
    
    //click
    await ele.click();

    await page.waitForTimeout(2000);

})