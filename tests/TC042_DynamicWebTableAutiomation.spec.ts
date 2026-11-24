import { test, expect } from "@playwright/test";

test("", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    //Scroll page till dynamic web table
    page.getByText("Dynamic Web Table").scrollIntoViewIfNeeded();

    //Get all the headings
    let allHeadings: string[] = await page.locator("//table[@id='taskTable']//th").allInnerTexts();
    console.log("Here are all column headings: " + allHeadings);

    //get the total number of rows
    console.log("Row count is: " + await page.locator("//table[@id='taskTable']//th").count());

    //get the total number of cols
    console.log("Column count is: " + await page.locator("//table[@id='taskTable']//tr[1]/td").count());

    console.log("-----------------------------------------------");

    //To get a specific column data, where column is Memory (MB)
    let expColHeading = "Memory (MB)";

    let position: number = 0;
    for (let heading of allHeadings) {
        position++;
        if (heading.includes(expColHeading)) {
            console.log(`The column ${expColHeading} is shown as column no.: ${position}`);

            let expColAllData: string[] = await page.locator("//table[@id='taskTable']//tr/td[" + position + "]").allInnerTexts();
            console.log(`All data from the ${expColHeading} column is: ${expColAllData}`);
        }
    }

    console.log("-----------------------------------------------");
    //Homework
    //To get a specific row data, where row is Firefox
    let expBrowserName = "Firefox";

    //Except first column other columns & rows are changing on refresh, So first we will identify firstColData
    let firstColData: string[] = await page.locator("//table[@id='taskTable']//tr//td[1]").allInnerTexts();

    let rowCount: number = 0;

    for (let cell of firstColData) {
        rowCount++;
        if (cell.includes(expBrowserName)) {
            console.log(`The position of ${expBrowserName} browser is at row: ${rowCount}`);

            //To capture entire row of expBrowserName
            let expBrowserRowData: string[] = await page.locator("//table[@id='taskTable']//tr[" + rowCount + "]//td").allInnerTexts();
            console.log(expBrowserRowData);
        }
    }

    await page.waitForTimeout(2000);
})

/* Given scenarios:
CPU load of Chrome process: 2.2%
Memory Size of Firefox process: 70.3 MB
Network speed of Chrome process: 0.7 Mbps
Disk space of Firefox process: 0.58 MB/s
*/

test("Test for given scenarios", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    //scroll webpage upto dynamic web-table
    await page.getByText("Dynamic Web Table").scrollIntoViewIfNeeded();


    let allHeadings: string[] = await page.locator("//table[@id='taskTable']//th").allInnerTexts();
    let cellCount: number = 0;

    for (let heading of allHeadings) {
        cellCount++;
        if (heading.includes("Name")) {
            let allBrowserNames: string[] = await page.locator("//table[@id='taskTable']//tr//td[" + cellCount + "]").allInnerTexts();
            let rowCount: number = 0;
            // let browserName: string = "Chrome";

            for (let browser of allBrowserNames) {
                rowCount++;

                //Scenario 1: CPU load of Chrome process: 2.2%
                if (browser.includes("Chrome")) {
                    let actLoad: string = await page.locator("//table[@id='taskTable']//td[text()='Chrome']/following-sibling::td[contains(text(),'%')]").innerText();
                    let expLoad: string = await page.locator("strong.chrome-cpu").innerText();

                    //Assert
                    expect(actLoad).toBe(expLoad);
                    console.log("CPU load of Chrome process matched i.e. " + actLoad);

                }

                //Scenario 2: Memory Size of Firefox process: 70.3 MB
                if (browser.includes("Firefox")) {
                    let actMemoryData: string = await page.locator("//table[@id='taskTable']//td[text()='Firefox']/following-sibling::td[contains(text(),'MB') and not(contains(text(),'MB/s'))]").innerText();
                    let expMemoryData: string = await page.locator("strong.firefox-memory").innerText();

                    //Assert
                    expect(actMemoryData).toBe(expMemoryData);
                    console.log("Memory Size of Firefox process matched i.e. " + actMemoryData);

                }

                //Scenario 3: Network speed of Chrome process: 0.7 Mbps 
                if (browser.includes("Chrome")) {
                    let actNwSpd: string = await page.locator("//table[@id='taskTable']//td[text()='Chrome']/following-sibling::td[contains(text(),'Mbps')]").innerText();
                    let expNwSpd: string = await page.locator("strong.chrome-network").innerText();

                    //Assert
                    expect(actNwSpd).toBe(expNwSpd);
                    console.log("Network speed of Chrome process matched i.e. " + actNwSpd);

                }

                //Scenario 4: Disk space of Firefox process: 0.58 MB/s
                if (browser.includes("Firefox")) {
                    let actDiskSpaceFF: string = await page.locator("//table[@id='taskTable']//td[text()='Firefox']/following-sibling::td[contains(text(),'MB/s')]").innerText();
                    let expDiskSpaceFF: string = await page.locator("strong.firefox-disk").innerText();

                    //Assert
                    expect(actDiskSpaceFF).toBe(expDiskSpaceFF);
                    console.log("Disk space of Firefox process matched i.e. " + actDiskSpaceFF);
                }
            }
        }
    }
})