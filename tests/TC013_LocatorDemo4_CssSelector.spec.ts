/*
Assignment3: 
PS:
Write script for Login and Logout Functionality of Orangehrm using cssSelector
Use URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
*/

import {test, expect} from "@playwright/test";

test("CssSelector - OrangeHRM Login & Logout",async({page})=>{

    //Open application
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //Enter Username
    await page.locator("input[name='username']").fill("Admin");

    //Enter Password
    await page.locator("input[placeholder='Password']").fill("admin123");

    //Click on Login button
    await page.locator("button[type='submit']").click();

    //Assertion to verify - 
    await expect(page).toHaveURL(/dashboard/);
    console.log("User is navigated to Dashboard page...!");

    //Pause for 2s
    await page.waitForTimeout(2000);

    //Logout
    await page.locator("span.oxd-userdropdown-tab").last().click();

    

})