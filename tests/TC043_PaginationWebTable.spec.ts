import { test, expect, Locator } from "@playwright/test";

test("Test for pagination scenario", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.getByText("Pagination Web Table").scrollIntoViewIfNeeded();

    let allPages: Locator[] = await page.locator("//ul[@id='pagination']/li/a").all()
    console.log("Total pages are: " + allPages.length);

    //As we have already used a page as a fixture, we use i to iterate in for loop
    for (let i of allPages) {
        console.log("The current page number is: " + await i.innerText());

        //To open that page\
        await i.click();

        //calculate count of rows & columns on that page
        console.log("Number of rows: " + await page.locator("//table[@id='productTable']//tbody/tr").count());
        console.log("Number of columns: " + await page.locator("//table[@id='productTable']//tbody/tr[1]//td").count());

    }

    //Scenario: goto page 3 find fitness tracker and check checkbox
    for (let i of allPages) {
        if ((await i.innerText()).includes("3")) {
            await i.click();

            await page.locator("//table[@id='productTable']//td[text()='Fitness Tracker']/following-sibling::td/input[@type='checkbox']").check();

            console.log("Checkbox of Fitness Tracker is selected.");

            break;
        }
    }

    await page.waitForTimeout(2000);
})