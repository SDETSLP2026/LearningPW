import {test,expect} from "@playwright/test";
import { text } from "node:stream/consumers";

test("Test for getByRole() locator", async({page})=>{

    await page.goto("https://automationplayground.com/crm/");

    //SignIn link
    await page.getByRole('link',{name:'Sign In'}).click();

    //Assertion
    await expect(page).toHaveTitle("Customer Service - Login");

    //Email
    await page.getByRole('textbox',{name:'Enter email'}).fill("test@gmail.com");

    //Password
    await page.getByRole('textbox',{name:'Password'}).fill("test123");

    //Checkbox - Remember Me
    await page.getByRole('checkbox',{name:'Remember me'}).check();

    //Button - Submit
    await page.getByRole('button',{name:'Submit'}).click();

    await page.waitForTimeout(2000);
})

test("Test for BuiltIn locators",async({page})=>{

    await page.goto("https://automationplayground.com/crm/");

    //getByText() - text between opening & closing tags
    await page.getByText('Sign In').click();

    //getByPlaceholder() - Email field
    await page.getByPlaceholder('Enter email').fill("test@gmail.com");

    //getByLabel() - Password field
    await page.getByLabel('Password').fill("test123");

    //getByLabel()
    await page.getByLabel('Remember me').check();

    //getByText()
    await page.getByText('Submit').click();

    await page.waitForTimeout(2000);
})

test("Test for getByAltText() locator",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByAltText('company-branding').highlight(); //Use to deal with image

    await page.waitForTimeout(2000);

})

test("Test for getByTitle() locator",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php");

    await page.getByTitle('MacBook').click(); //Use to deal with title text only

    await page.waitForTimeout(2000);

})

test.only("Test for getByTestId() locator/data-testid attribute",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    //Use to deal with data-testid attribute only
    let text:string = await page.getByTestId('profile-email').innerText();
    console.log("Email is: " + text);
    
    await page.waitForTimeout(2000);

})