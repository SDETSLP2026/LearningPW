import {test,expect} from "@playwright/test";

test("Test for date picker where we are passing direct date",async({page})=>{

    await page.goto("https://formy-project.herokuapp.com/datepicker");

    await page.locator("#datepicker").fill("10/31/2026");

    await page.waitForTimeout(2000);

})

test.only("Test for datepicker as per user's expectations",async({page})=>{

    await page.goto("https://formy-project.herokuapp.com/datepicker");

    await page.locator("#datepicker").click();

    //expectations
    let dd:string = "30";
    let mm:string = "June";
    let yyyy:string = "2027";

    while(true)
    {

        let text:string = await page.locator("th.datepicker-switch").first().innerText();
        console.log(text);//This will print all the traversed <month & year>

        let actualMonth = text.split(" ")[0];
        let actualYear = text.split(" ")[1];

        if(actualMonth === mm && actualYear === yyyy)
        {
            break;
        } else {
            await page.locator("th.next").first().click();
        }   
    }

    //date
    await page.locator("td[class^='day']").filter({hasText:dd}).first().click();

    await page.waitForTimeout(2000);
})