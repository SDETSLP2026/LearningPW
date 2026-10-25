import {test, expect} from "@playwright/test";

test("Test for registration process using xPathOperators and indexing", async({page})=>{

    //Open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    //FirstName:- xPath with and operator
    await page.locator("//input[@name='firstname' and @class='form-control']").fill("Swapnil");

    //LastName:- xPath with or operator
    await page.locator("//input[@name='lastname' or @id='input-lastname']").fill("Padekar");

    //Random email generation
    let email:string = "sdetsp"+new Date().getTime()+"@gmail.com";

    //E-mail:- xPath with indexing
    await page.locator("(//input[@class='form-control'])[3]").fill(email);

    //Telephone:- xPath with position
    await page.locator("(//input[@class='form-control'])[position()=4]").fill("1234567890");

    //Password:- xPath 
    await page.locator("(//input[@class='form-control'])[5]").fill("test123");

    //Password Confirm:- xPath 
    await page.locator("(//input[@class='form-control'])[6]").fill("test123");

    //NewsLetter Subscribe:- Radio button - Yes
    await page.locator("//input[@name='newsletter' and @value='1']").check();

    //Privacy Policy:- Radio button
    await page.locator("//input[@type='checkbox' and @name='agree']").check();

    //click on Continue
    await page.locator("//input[@value='Continue']").click();

    //Assertion - get the text of message
    let text:string = await page.locator("(//h1)[2]").innerText();
    console.log("Message: " + text);

    expect(page.locator("(//h1)[2]")).toHaveText("Your Account Has Been Created!");
    console.log("New user registration is completed.");
    
    await page.waitForTimeout(1000);
})