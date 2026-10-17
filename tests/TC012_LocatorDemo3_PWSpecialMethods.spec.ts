import {test, expect} from "@playwright/test";

test("Test for multiple checkboxes using first(), last(), nth() methods", async({page})=>{

    await page.goto("https://formy-project.herokuapp.com/form");

    await page.locator("input[type='checkbox']").first().check(); //This is to return first matching element for the locator

    await page.locator("input[type='checkbox']").last().check(); //This is to return last matching element for the locator
    
    await page.locator("input[type='checkbox']").nth(1).check(); //This is to return n-th matching element matching element (Based on 0)

    await page.waitForTimeout(3000);

})