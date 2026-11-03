/*
Assignment 8:
PS: Write script for Login  and Logout Functionality of Orangehrm using xpath
Use URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
*/

import {test,expect} from "@playwright/test"

test("",async({page})=>{

    //Open an application
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@placeholder='Password']").fill("admin123");

    //Login
    await page.locator("//button[@type='submit']").click();

    //Logout
    await page.locator("//span[@class='oxd-userdropdown-tab']").click();
    await page.locator("//a[normalize-space()='Logout']").click();

    await page.waitForTimeout(2000);


})