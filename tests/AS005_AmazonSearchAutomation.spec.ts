/*
Assignment 5:
PS: Navigate to https://www.amazon.in/ app and 
search for "macbook pro" and get the search result along with count in console.
*/

import {test,expect} from "@playwright/test"

test("Test to search for a string and get the count of results",async({page})=>{

    //Open an application
    await page.goto("https://www.amazon.in/");

    //Locate SearchBox Element
    await page.locator("//input[@id='twotabsearchtextbox']").fill("macbook pro");
    
    //Pause
    await page.waitForTimeout(2000);

    //Get the list of options & count
    let searchResults:string[] = await page.locator("//div[@class='left-pane-results-container']").allInnerTexts();
    console.log("Total count of search options: " + searchResults.length);

    for(let result of searchResults){
        console.log(result);
    }
})

/*Output:
PS D:\WorkSpaces\PrepNxt\LearningPW> npx playwright test tests/AS005_AmazonSearchAutomation.spec.ts
npm notice run learningplaywright@1.0.0 npx
npm notice run playwright test tests/AS005_AmazonSearchAutomation.spec.ts

Running 1 test using 1 worker
[chromium] › tests\AS005_AmazonSearchAutomation.spec.ts:9:1 › Test to search for a string and get the count of results
Total count of search options: 1
macbook pro m5
macbook pro m4
macbook pro m5 max
macbook pro 14 inch cover
macbook pro m5 pro 14 inch
macbook pro charger
macbook pro m5 16 inch
macbook pro m5 16+ inch
macbook pro cover
macbook pro 14 inch
  1 passed (9.3s)

To open last HTML report run:

  npx playwright show-report

PS D:\WorkSpaces\PrepNxt\LearningPW> 
*/