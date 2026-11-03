import {test, expect} from "@playwright/test";
import { log } from "node:console";

test("Test for Xpath axes",async({page})=>{

    //open an application
    await page.goto("https://automationplayground.com/crm/customers.html?email-name=test%40gmail.com&password-name=sdasdasd&submit-name=");

    // hightlight() - Highlight the corresponding web-element(s) on the screen. 
    // Useful for debugging, don't commit the code that uses locator.highlight([options]).

    
    //ancestor: Identify for John's ancestor tag i.e. tbody
    await page.locator("//td[text()='John']//ancestor::tbody").highlight();
    
    //parent: Identify for John's parent tag i.e. tr
    await page.locator("//td[text()='John']//parent::tr").highlight();

    //Child: Identify all the child rows for Row No.3
    let totalChildNodes:number = await page.locator("//tbody/tr[3]//child::td").count();
    console.log("Child node count for Row 3 are: " + totalChildNodes); //5

    //Find no of rows following John's row
    let followingNodes: number = await page.locator("//td[text()='John']//following::tr").count();
    console.log("Count of following rows to John: " + followingNodes); //2

    //Find no of rows preceding John's row
    let precedingNodes: number = await page.locator("//td[text()='John']//preceding::tr").count();
    console.log("Count of preceding rows to John: " + precedingNodes);//4
    

    //Descendant node - All the direct/indirect child nodes wrt tbody
    //for tbody tag find all the descendant nodes tr & td
    let descendantTRNodes:number = await page.locator("//tbody//descendant::tr").count(); 
    console.log("WRT tbody node - Count of the descendant TR nodes are: " + descendantTRNodes); //6
    
    let descendantTDNodes:number = await page.locator("//tbody//descendant::td").count(); 
    console.log("WRT tbody node - Count of the descendant TD nodes are: " + descendantTDNodes); //30


    //WRT John element - Get the count/text of following siblings of John
    let followingSiblingElements:string[] = await page.locator("//td[text()='John']//following-sibling::td").allInnerTexts();
    console.log("Total following siblings wrt John element are: " + followingSiblingElements.length);//3
    console.log("The text is: ", followingSiblingElements);
    
    //WRT John element - Get the count/text of preceding siblings of John
    let precedingSiblingElements:string[] = await page.locator("//td[text()='John']//preceding-sibling::td").allInnerTexts();
    console.log("Total preceding siblings wrt John element are: " + precedingSiblingElements.length);//1
    console.log("The text is: ", precedingSiblingElements);

    await page.waitForTimeout(2000);
    
})

/* Output -
Running 1 test using 1 worker
[chromium] › tests\TC022_LocatorsDemo11_xpathAxes.spec.ts:4:1 › Test for Xpath axes
Child node count for Row 3 are: 5
Count of following rows to John: 2
Count of preceding rows to John: 4
WRT tbody node - Count of the descendant TR nodes are: 6
WRT tbody node - Count of the descendant TD nodes are: 30
Total following siblings wrt John element are: 3
The text is:  [ 'Robinson', 'jr5527', ' ' ]
Total preceding siblings wrt John element are: 1
The text is:  [ '4' ]
  1 passed (7.4s)
*/
