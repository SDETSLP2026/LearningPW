/*
goBack() - Navigate to last visited page
goForward() - Move to next page
reload() - Refresh the page
*/


import {test} from "@playwright/test";

test("TC_Navigate within applications",async({page})=>{

    await page.goto("https://www.idrive360.com/enterprise/login");

    await page.waitForTimeout(2000);

    await page.goto("https://www.ebay.com");
    await page.waitForTimeout(2000);

    //Navigate back
    await page.goBack();

    await page.waitForTimeout(1000);

    //Navigate forward
    await page.goForward();

    await page.waitForTimeout(1000);

    //Refresh the page
    await page.reload();


})