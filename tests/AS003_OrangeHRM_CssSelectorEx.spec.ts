/*
Assignment3: 
PS:
Write script for Login  and Logout Functionality of Orangehrm using cssSelector
Use URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
*/

import {test} from "@playwright/test";

test("CssSelector - OrangeHRM Login & Logout",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("input[name='username']").fill("Admin");

    await page.locator("input[name='password']").fill("admin123");
    
    await page.locator("button[type='submit']").click();

    await page.locator("span.oxd-userdropdown-tab").last().click();

    await page.waitForTimeout(2000);



})