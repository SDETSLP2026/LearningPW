/*
PS: Assignment 14: Redbus calendar
Navigate https://www.redbus.in/ app and 
Autodate given calendar field.
*/

import {test,expect, } from "@playwright/test"

test("Test for Redbus application for Automate date fields",async({page})=>{

    await page.goto("https://www.redbus.in/", {waitUntil: 'domcontentloaded'});

    await page.locator("//div[@aria-label='Select date of journey']").click();

    //Expectations
    let dd = "11";
    let mon = "December";
    let yyyy = "2026";

    while(true)
    {
        let currMonYr:string = await page.locator("//p[@class='monthYear___a4142d']").innerText();
        console.log("Current selected Month & Year: ", currMonYr);//This will print all the traversed <month & year>

        let actualMonth = currMonYr.split(" ")[0];
        let actualYear = currMonYr.split(" ")[1];

        if(actualMonth === mon && actualYear === yyyy)
        {
            //Expected Month & Year matched
            break;
        } else {
            await page.getByRole('button',{name:'Next month, December 2026'}).first().click();
        }
    }

    //date
    await page.locator('span').filter({ hasText: '11' }).first().click();
    const selectedDOJ = await page.locator("//span[@class='doj___9fd481']").innerText();
    console.log("The selected date of journey is: ", selectedDOJ);

    await page.waitForTimeout(2000);
})