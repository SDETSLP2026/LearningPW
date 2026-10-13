/*
Assignment1: Open website and verify title.
Steps
1. Launch browser miscrosoft edge
2. Navigate to website https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
3. Get the page title & verify it.
4. Get the page URL & verify it.
4. Expected Correct title is 'OrangeHRM' should be displayed & the correct URL should be open.
*/

import {test, expect} from "@playwright/test";

test("OrangeHRM - Title & URL Validation", async({page})=>{
    
    //Open website
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {waitUntil: 'load'});

    //Capture page title
    const pgTitle:string = await page.title();

    //page title validation
    await expect(page).toHaveTitle("OrangeHRM");
    console.log("Page title matched" + pgTitle);

    //Capture page url
    let pgUrl:string = page.url();

    //Validate page URL
    //#1
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log("Full URL of the page is match." + pgUrl);
    
    //#2
    await expect(page).toHaveURL(/orangehrm/);
    console.log("Partial URL of the page is match" + pgUrl);
})
