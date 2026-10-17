/*
Assignment2: Open website and verify title.
PS: Steps
Open https://www.amazon.in/
open https://www.google.com/
get the title and print same
Navigate back
get the title and print same
Navigate forward
get the title and print same
Reload page
*/

import {test, expect} from "@playwright/test";

test("Navigation test", async({page})=>{

    await page.goto("https://www.amazon.in/");
        
    await page.goto("https://www.google.com/");
    console.log("This is the second web page: " + await page.title());

    await page.goBack();
    console.log("This is the first web page: " + await page.title());

    await page.goForward();
    console.log("This is the second web page again: " + await page.title());
    
    await page.reload();
    console.log("The page is reloaded. Thank you.");
    

})

/*
Running 1 test using 1 worker
[chromium] › tests\AS002_NavigationMethods.spec.ts:16:1 › Navigation test
This is the second web page: Google
This is the first web page: Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in
This is the second web page again: Google
The page is reloaded. Thank you.
  1 passed (13.8s)
*/