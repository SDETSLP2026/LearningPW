import {test, expect} from "@playwright/test";

test("Test for xPath methods", async({page})=>{

    //Open application
    await page.goto("https://www.amazon.in/");

    //click on the Mobiles link from Home page - xPath+text()s
    await page.locator("//a[text()='Mobiles']").click();

    //Click on cart
    await page.locator("//span[normalize-space()='Cart']").nth(1).click();

    //get the cart message
    let text1:string = await page.locator("//h3[normalize-space()='Your Amazon Cart is empty']").innerText()
    console.log("Cart text is: "+text1);

    //search some product: xpath with contains()
    let searchEle1 = page.locator("//input[contains(@id,'searchtext')]");
    await searchEle1.fill("Macbook Pro");
    await searchEle1.press('Enter');
    await page.waitForTimeout(2000);

    //search some product : xpath with starts-with()
    let searchEle2=page.locator("//input[starts-with(@id,'twotab')]");
    await searchEle2.clear();
    await searchEle2.fill("Watch")
    await searchEle2.press('Enter');
    await page.waitForTimeout(2000);

})