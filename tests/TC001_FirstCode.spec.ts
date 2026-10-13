//Coding note: while using any inbuilt function first check what it returns & accordingly assigfn var/print it. 

//add test runner
import {test} from "@playwright/test";

//test(TCTitle, Async callBackFun);

test("Test for google application launch", async({page}) =>{

    //To open any web application page in browser
    await page.goto("https://www.google.com"); //page => Browser Tab

    //To get the title of the current page
    console.log("Application title is: " + await page.title());
})