/*
Assignment 10: Select base dropdown
PS: Navigate to https://register.rediff.com/register/register.php?FormName=user_details app.
Automate these dropdowns - Date of Birth, I live in, City
*/

import {test,expect, Locator} from "@playwright/test"

test("Test for rediff registration form dropdown automation",async({page})=>{

    page.goto("https://register.rediff.com/register/register.php?FormName=user_details");

    //Date of Birth
    await page.locator("//select[@class='day']").selectOption("02");
    await page.locator("//select[@class='middle month']").selectOption("SEP");
    await page.locator("//select[@class='year']").selectOption("1986");
    await page.waitForTimeout(2000);

    //I live in - Country
    await page.locator("select#country").selectOption("India");
    await page.waitForTimeout(2000);

    //I live in - City
    await page.locator("select[name ^= 'city']").selectOption("Pune");
    await page.waitForTimeout(2000);
    
})