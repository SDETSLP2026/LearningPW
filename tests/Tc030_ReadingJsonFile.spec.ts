import {test, expect} from "@playwright/test";

import fs from "fs";
import {readSingleJsonData} from "../src/utility/JsonRead.js";
import { json } from "stream/consumers";

test("Test CRM login functionality by passing credentials in the script", async({page})=>{

    await page.goto("https://automationplayground.com/crm/login.html");

    await page.getByPlaceholder("Enter email").fill("test@gmail.com");
    await page.getByPlaceholder("Password").fill("test123");
    await page.getByText("Submit").click();

    await page.waitForTimeout(2000);
})


test("Test CRM login functionality by reading JSON credentials to JS data",async({page})=>{

    //json/csv/excel data ---> JSObject

    let jsonData = fs.readFileSync("src/TestData/crmlogin.json","utf-8");
    console.log(jsonData);

    //Converts a JavaScript Object Notation (JSON) string into an JS object.
    let jsData = JSON.parse(fs.readFileSync("src/TestData/crmlogin.json","utf-8"));
    console.log(jsData);

    //Single entry just add a key & read value
    console.log(jsData.email);
    console.log(jsData.password);

    let email = jsData[1].email;
    let password = jsData[1].password;

    await page.goto("https://automationplayground.com/crm/login.html");
    await page.getByPlaceholder("Enter email").fill(email);
    await page.getByPlaceholder("Password").fill(password);
    await page.getByText("Submit").click();
        
    await page.waitForTimeout(2000);
})

test("Test CRM login functionality using JSONReadTS file utility",async({page})=>{

    let data = readSingleJsonData("crmlogin",1);

    await page.goto("https://automationplayground.com/crm/login.html");

    await page.getByPlaceholder("Enter email").fill(data.email);
    await page.getByPlaceholder("Password").fill(data.password);
    await page.getByText("Submit").click();

    await page.waitForTimeout(2000);
})