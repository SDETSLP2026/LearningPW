/*
Assignment 15: JsonFileData
Navigate https://opensource-demo.orangehrmlive.com/web/index.php/auth/login 
Create JSON file with 'Admin' as username and 'admin123' as password
then read the data from file and use it test case for Login.
*/

import {test, expect} from "@playwright/test";

import fs from "fs";
import {readSingleJsonData} from "../src/utility/JsonRead.js";
import { json } from "stream/consumers";

test("CssSelector - OrangeHRM Login & Logout",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[placeholder='Password']").fill("admin123");

    //Login
    await page.locator("button[type='submit']").click();

    //Logout
    await page.locator("span.oxd-userdropdown-tab").last().click();

    await page.waitForTimeout(2000);
})

test("Xpath - OrangeHRM Login & Logout",async({page})=>{

    //Open an application
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@placeholder='Password']").fill("admin123");

    //Login
    await page.locator("//button[@type='submit']").click();

    //Logout
    await page.locator("//span[@class='oxd-userdropdown-tab']").click();
    await page.locator("//a[normalize-space()='Logout']").click();

    await page.waitForTimeout(2000);
})

test("Test OrangeHRM login & logout functionality using JsonReadTS file credentials",async({page})=>{

    //json/csv/excel data ---> JSObject
    
    let jsonData = fs.readFileSync("src/TestData/orangehrmcreds.json","utf-8");
    console.log(jsonData);

    let jsData = JSON.parse(fs.readFileSync("src/TestData/orangehrmcreds.json","utf-8"));
    console.log(jsData);

    //Single entry just add a key & read value
    console.log(jsData.username);
    console.log(jsData.password);

    let username = jsData.username;
    let password = jsData.password;
        
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(2000);
    await page.getByPlaceholder("Username").fill(username);
    await page.getByPlaceholder("Password").fill(password);
    await page.getByRole('button', {name:'Login'}).click();

    //Logout
    await page.locator("span.oxd-userdropdown-tab").last().click();


    await page.waitForTimeout(2000);
})

test.only("Test OrangeHRM login & logout functionality using utility",async({page})=>{

    //json/csv/excel data ---> JSObject

    let data = readSingleJsonData("orangehrmcreds",0);

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Username').fill(data.username);
    await page.getByPlaceholder('Password').fill(data.password);
    await page.getByRole('button', {name:'Login'}).click();

    //Logout
    await page.locator("span.oxd-userdropdown-tab").last().click();

    await page.waitForTimeout(2000);
})