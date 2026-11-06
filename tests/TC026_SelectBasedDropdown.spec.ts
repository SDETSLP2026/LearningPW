/*
Select tag based dropdown automation
-------------------------------------
<select>

Playwright support methods
--------------------------

First dropdown element and then use on below methods => 
1. Visible text - element.selectOption("visible text")
2. Label - element.selectOption({label:'visible text'})
3. Value - element.selectOption({value:'value'})
4. Index - element.selectOption({index:number})

selectOption() - Selects option or options in <select>

*/



import {test, expect} from "@playwright/test";
import { scrollDown } from "./generics/TestUtil.js";

test("Test for Formy page select based dropdown",async({page})=>{

    await page.goto("https://formy-project.herokuapp.com/form");

    await scrollDown(page);

    //Visible Text
    await page.locator("#select-menu").selectOption("10+");
    await page.waitForTimeout(1500);

    //Label
    await page.locator("#select-menu").selectOption({label:'0-1'});
    await page.waitForTimeout(1500);

    //Value
    await page.locator("#select-menu").selectOption({value:'3'});
    await page.waitForTimeout(1500);

    //Value
    await page.locator("#select-menu").selectOption({index:2}); // Indexing starts from 0 - Select option
    await page.waitForTimeout(1500);

    await page.waitForTimeout(2000);

})