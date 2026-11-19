import {test, expect} from "@playwright/test";
import XLSX from "xlsx";
import {readExcelFileSheetwise} from "../src/utility/ExcelRead.js"

test("Test CRMLogin by reading Excel data sheetwise", async({page})=>{

    //Step 1: Goto file explorer and create a XLSX file with data

    //Step 2: WB => WS => Read the excel data
    //Read the file --> WorkBook
    let wb = XLSX.readFile("src/TestData/crmlogin.xlsx");

    //WorkBook --> WorkSheet
    //A dictionary of the worksheets in the workbook. Use SheetNames to reference these.
    let ws = wb.Sheets["crmCreds"];

    //Utility --> WorkSheet --> Data
    let jsonResult = XLSX.utils.sheet_to_json(ws); //Converts a worksheet object to an array of JSON objects
    console.log(jsonResult); //Returns array
    /* [
        { email: 'test3@gmail.com', password: 'test123' },
        { email: 'shrisha@gmail.com', password: 'shrisha123' }
    ] */

    //To read 2nd row data
    let data:any = jsonResult[1];
    console.log(data.email); //shrisha@gmail.com
    console.log(data.password);//shrisha123

    await page.goto("https://automationplayground.com/crm/login.html");
    await page.getByPlaceholder("Enter email").fill(data.email);
    //assertion for inputvalue
    expect(await page.getByPlaceholder("Enter email").inputValue()).toBe("shrisha@gmail.com");

    await page.getByPlaceholder("Password").fill(data.password);
    //assertion for inputvalue
    expect(await page.getByPlaceholder("Password").inputValue()).toBe("shrisha123");
    
    await page.getByRole('button',{name:'Submit'}).click();

    await page.waitForTimeout(2000);

})

test("Test for CRMLogin using ExcelData via utility", async({page})=>{

    //Read data from Excel
    let data = readExcelFileSheetwise("crmCreds", 0);
    
    await page.goto("https://automationplayground.com/crm/login.html");
    await page.getByPlaceholder("Enter email").fill(data.email);
    //assertion for inputvalue
    expect(await page.getByPlaceholder("Enter email").inputValue()).toBe("test3@gmail.com");

    await page.getByPlaceholder("Password").fill(data.password);
    //assertion for inputvalue
    expect(await page.getByPlaceholder("Password").inputValue()).toBe("test123");
    
    await page.getByRole('button',{name:'Submit'}).click();

    await page.waitForTimeout(2000);
})

test("Test for OrangHRM login using ExcelData via utility", async({page})=>{

    //Read data from Excel
    let testData = readExcelFileSheetwise("orangehrmCreds", 0);
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill(testData.username);
    await page.getByPlaceholder("Password").fill(testData.password);
    await page.getByRole('button',{name:'Login'}).click();

    await page.waitForTimeout(2000);
})