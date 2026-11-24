/*
Assignment 19: WebTable
========================
Navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html
and automate dynamic table for -
CPU load of Chrome process: 0.9%
Memory Size of Firefox process: 95.8 MB
Network speed of Chrome process: 8.4 Mbps
Disk space of Firefox process: 0.94 MB/s
*/

import { test, expect } from "@playwright/test";

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

/*
Running 1 test using 1 worker
[chromium] › tests\AS019_DynamicWebTable.spec.ts:14:1 › Test for given scenarios

CPU load of Chrome process matched i.e. 5.7%
Network speed of Chrome process matched i.e. 3.5 Mbps
Memory Size of Firefox process matched i.e. 61.3 MB
Disk space of Firefox process matched i.e. 0.87 MB/s

1 passed (6.1s)

To open last HTML report run:

  npx playwright show-report
*/