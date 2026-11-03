/*
Assignment 7: xpath
PS: Navigate to https://tutorialsninja.com/demo/index.php?route=account/login app
and automate login and logout scenario based on xpath
*/

import {test,expect} from "@playwright/test";

test("Test Login and Logout scenarios using xPaths",async({page})=>{

    //Open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //To Login - Enter email id & password
    await page.locator("//input[@id='input-email']").fill("sdetsp@gmail.com");
    await page.locator("//input[@id='input-password']").fill("test123");

    //Click on 'Login' button
    await page.locator("//input[@value='Login']").click();

    await page.waitForTimeout(2000);

    //Click on logout
    await page.locator("//a[@title='My Account']").click();
    await page.locator("(//a[normalize-space()='Logout'])[1]").click();

})