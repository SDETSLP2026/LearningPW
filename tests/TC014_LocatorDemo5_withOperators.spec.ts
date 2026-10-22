import {test, expect, Locator} from "@playwright/test";

test("Test for Amazon search with Substring methods/symbols", async({page})=>{

    await page.goto("https://www.amazon.in/"); //open application

    //Identify search box 
    let searchEle1:Locator = page.locator("input[id *= 'searchtext']"); //using cssSelector & * symbol - partial match
    
    await searchEle1.fill("Bags"); //search for bags
    
    //press() - Focuses the matching element and presses a combination of the keys.
    await searchEle1.press('Enter'); //Press Enter key of Keyboard

    await page.waitForTimeout(1000);

    //--------------------------------------------------------

    let searchEle2:Locator = page.locator("input[id ^= 'twotab']"); //using cssSelector & ^ symbol - starts with
    await searchEle2.clear();
    await searchEle2.fill("iPhone");
    await searchEle2.press('Enter');
    await page.waitForTimeout(1000);

    let searchEle3:Locator = page.locator("input[id $= 'box']"); //using cssSelector & $ symbol - ends with
    await searchEle3.clear();
    await searchEle3.fill("Laptop");
    await searchEle3.press('Enter');
    await page.waitForTimeout(2000);
    
})