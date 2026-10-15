/*
To control test execution we use tags/attributes
only - Use test.only tag to ensure the running test case.
skip - Use test.skip tag to ensure that the test case won't be running/skipped.
*/

import {test} from "@playwright/test";

test("TC1: Google launch", async({page})=>{

    await page.goto("https://www.google.com");

    console.log("The page title is: " + await page.title());
    
})


test("TC2: Facebook launch", async({page})=>{

    await page.goto("https://www.facebook.com");

    console.log("The page title is: " + await page.title());
    
})


test.skip("TC3: OpenCart launch", async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?");

    console.log("The page title is: " + await page.title());
    
})





