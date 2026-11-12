/*
Assignment 12: Bootstrap dropdown
PS: Navigate to https://www.redbus.in/ app 
Automate "FROM" and "TO" Date dropdowns.
*/
import {test,expect} from "@playwright/test"

test("Test for Redbus application for Automate From & To date fields",async({page})=>{

    await page.goto("https://www.redbus.in/");

})
