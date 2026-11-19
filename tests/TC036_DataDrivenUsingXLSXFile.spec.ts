import {test,expect} from "@playwright/test";
import {excelDDT} from "../src/utility/DDTExcelRead.js"

let testData = excelDDT("DDT_CRMCreds");//2D-Array

for(let data of testData)
{
    test(`Test for CRM Login using DDT - ${data.id}`, async({page})=>{

        await page.goto("https://automationplayground.com/crm/login.html");

        await page.getByPlaceholder("Enter email").fill(data.email);
        await page.getByPlaceholder("Password").fill(data.password);  
        await page.getByRole('button',{name:'Submit'}).click();

        await page.waitForTimeout(2000);
    })
}