/*
Assignment 6:
PS: Navigate to https://tutorialsninja.com/demo/index.php?route=account/login app
and get the all footer links text in console.
*/

import {test,expect} from "@playwright/test"

test("Test to get count of all footer links",async({page})=>{

    //Open an application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //Locate all the links in footer section - //footer//div[@class='row']
    let allFooterLinks:string[] = await page.locator("//footer//div[@class='row']//a").allInnerTexts();
    console.log("Total count of footer links: " + allFooterLinks.length);//15

    for(let link of allFooterLinks){
        console.log(link);
    }
})

/* Output:-
------------
PS D:\WorkSpaces\PrepNxt\LearningPW> npx playwright test tests/AS006_QAFox_AllFooterLinks.spec.ts
npm notice run learningplaywright@1.0.0 npx
npm notice run playwright test tests/AS006_QAFox_AllFooterLinks.spec.ts

Running 1 test using 1 worker
[chromium] › tests\AS006_QAFox_AllFooterLinks.spec.ts:9:1 › Test to get count of all footer links
Total count of footer links: 15
About Us
Delivery Information
Privacy Policy
Terms & Conditions
Contact Us
Returns
Site Map
Brands
Gift Certificates
Affiliate
Specials
My Account
Order History
Wish List
Newsletter
  1 passed (4.3s)

*/