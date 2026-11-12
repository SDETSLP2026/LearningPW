/*
Assignment 9:
PS: Navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html app 
and locate all scenarios as per built in locator strategy.
*/

import {test,expect, Locator} from "@playwright/test"

test("Test for - using builtin locators identify all the webelements",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");


    //Section 1. getByRole() Locators
    // Buttons
    let btnPrimaryAction:Locator = page.getByRole("button",{name :'Primary Action'});
    let btnToggleButton:Locator = page.getByRole("button",{name: 'Toggle Button'});
    let btnDivWithButtonRole:Locator = page.getByRole("button", {name: 'Div with button role'});
    
    // Form Elements
    let username:Locator = page.getByRole("textbox", {name: 'Username'});
    let chkbxAcceptTerms:Locator = page.getByLabel('Accept terms');
    
    // Navigation Links
    let linkHome:Locator = page.getByRole("link",{name:'Home'});
    let linkProducts:Locator = page.getByRole("link",{name:'Products'});
    let linkContact:Locator = page.getByRole("link", {name:'Contact'});

    //----------------------------------------------------------------------------------------------

    //Section 2. getByText() Locators
    let txtImportant:Locator = page.getByText('important',{exact:true});
    let txtColoredText:Locator = page.getByText('colored text', { exact: true });

    let listItem1:Locator = page.getByText('List item 1', { exact: true });
    let listItem2withLink:Locator = page.getByText('List item 2 with link', { exact: true });
    let specialUniqueText:Locator = page.getByText('Special: Unique text identifier', { exact: true })

    let btnSubmitForm:Locator = page.getByText('Submit Form', { exact: true })

    //----------------------------------------------------------------------------------------------

    

    
    
    await page.waitForTimeout(2000);


})