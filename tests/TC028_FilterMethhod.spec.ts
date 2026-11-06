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