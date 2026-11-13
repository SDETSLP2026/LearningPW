import {test, expect} from "@playwright/test";

import fs from "fs";
import {readSingleJsonData} from "../src/utility/JsonRead.js";

test("Test CRM login functionality using JSON file credentials", async({page})=>{

    await page.goto("https://automationplayground.com/crm/login.html");

    await page.getByPlaceholder("Enter email").fill("test@gmail.com");
    await page.getByPlaceholder("Password").fill("test123");
    await page.getByText("Submit").click();

    await page.waitForTimeout(2000);
})

test.only("Test CRM login functionality using JsonReadTS file credentials",async({page})=>{

    //json/csv/excel data ---> JSObject

    let data = readSingleJsonData("crmlogin",1);

    await page.goto("https://automationplayground.com/crm/login.html");

    await page.getByPlaceholder("Enter email").fill(data.email);
    await page.getByPlaceholder("Password").fill(data.password);
    await page.getByText("Submit").click();

    await page.waitForTimeout(2000);
})