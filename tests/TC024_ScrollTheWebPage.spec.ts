// - ./generics/TestUtil.js - code is used here

import {test, expect, Locator} from "@playwright/test";
import { scrollDown, scrollUp, scrollUpToElement } from "./generics/TestUtil.js";


test("Test for page scroll functionality", async({page})=>{

    //Open a application
    // await page.goto("https://www.amazon.in/");
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.waitForTimeout(5000);
    await page.waitForLoadState('domcontentloaded');


    //Scroll Down functionality
    await page.evaluate(()=>{
        //Write JS Command
        // window.scrollTo(0,5000); // Hard-coded values
        window.scrollTo(0, document.body.scrollHeight);
        
        /*scrollHeight - The scrollHeight read-only property of the Element interface is a measurement of the height of an element's content, 
        including content not visible on the screen due to overflow.*/
        
    })

    await page.waitForTimeout(2000);

    //Scroll Up
    page.evaluate(()=>{
        window.scrollTo(document.body.scrollHeight, 0);
    })

    await page.waitForTimeout(2000);

    //Scroll the page upto element: file Upload
    await page.getByText("Upload Files").scrollIntoViewIfNeeded();

    await page.waitForTimeout(2000);
})


test("Test for scroll functionality using utility", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await scrollDown(page);

    await page.waitForTimeout(1500);

    await scrollUp(page);

    await page.waitForTimeout(1500);

    let element:Locator = page.getByRole('heading',{name:'Pagination Web Table', level:2});
    await scrollUpToElement(page,element);

    await page.waitForTimeout(1500);
})