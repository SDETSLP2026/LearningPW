/*
MAKE THE BELOW SETTINGS BEFORE RUNNING THE BELOW CODE
1. Goto playwright.config.ts file.
2. Uncomment the browsers under title - Test against mobile viewports.
*/

import {expect, test} from "@playwright/test";

test("Test for mobile viewport",async({page})=>{

    await page.goto("https://www.saucedemo.com");

    await expect(page).toHaveTitle("Swag Labs");

    console.log("Title is: " + await page.title());

    await page.waitForTimeout(4000);
    

})