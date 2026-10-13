import {test, expect} from "@playwright/test";

test("Test for Google application title and url validation",async({page})=>{

    //Open the Google app
    await page.goto("https://www.google.com/", {waitUntil: 'load'});

    //OR
    
    // waitForLoadState - Returns when the required load state has been reached.
    await page.waitForLoadState('domcontentloaded');

    
/*    
    //To validate the full title - Older approach
    if(appTitle === "Google"){
        console.log("Title matched, Test pass...");
    } else {
        console.log("Title not matched, Test fail...");
    }
*/

// Title validation - Newer approach
const appTitle:string = await page.title(); //get the title: title()

//Autowait is only available for the page methods
await expect(page).toHaveTitle("Google"); //Hard Assertion - Error will appear after 5 sec
console.log("Title matched..." + appTitle);

// Page URL validation - Newer approach
let appUrl:string = page.url(); // get the page url: url()

//Autowait is not available for these node methods
//Variable level - full match
expect(appUrl).toBe("https://www.google.com/");

//Variable level - partial match
expect(appUrl).toContain("google.com");

//Validate full url with base page level assertion
await expect(page).toHaveURL("https://www.google.com/");
console.log("App FullURL matched." + appUrl);

//Validate partial url
await expect(page).toHaveURL(/google/);
console.log("App PartialURL matched." + appUrl);


})