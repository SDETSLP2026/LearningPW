import {test, expect} from "@playwright/test";

test("Test for CRM login & logout with xPath basic syntax", async({page})=>{

    //Open application
    await page.goto("https://automationplayground.com/crm/");

    //Click on Signin
    await page.locator("//a[@id='SignIn']").click();

    //Enter in email field
    await page.locator("//input[@id='email-id']").fill("test@gmail.com");

    //get the entered value from the input box: inputValue()
    let emailText:string = await page.locator("//input[@id='email-id']").inputValue();
    console.log("Entered email-id is: " + emailText);
    
    //Enter in password field
    await page.locator("//input[@id='password']").fill("test123");
    let pswdText:string = await page.locator("//input[@id='password']").inputValue();
    console.log("Entered password is: " + pswdText);

    //Check the checkbox
    await page.locator("//input[@id='remember']").check();

    //Click on Submit button
    await page.locator("//button[@type='submit']").click();

    //Assertion
    await expect(page).toHaveTitle("Customers");
    console.log("User is navigated to customer's page.");
    
})