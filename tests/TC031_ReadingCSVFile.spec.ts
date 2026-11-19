import {test, expect} from "@playwright/test";
import fs from "fs"; // File System 
import Papa from "papaparse"; // To deal with CSV files
import {readCSVFile} from "../src/utility/CsvRead.js"

test("Test for CRMLogin by reading data from CSV file", async({page})=>{

    //Step1: Get the file path
    //readFileSync() - Returns the contents of the path.
    let csvFileContent:string = fs.readFileSync("src/TestData/crmlogin.csv","utf-8");

    //Step2: Parse it using Papa object
    let result = Papa.parse(csvFileContent,{
        header:true, // If true, the first row of parsed data will be interpreted as field names.
        skipEmptyLines:true // If true, lines that are completely empty (those which evaluate to an empty string) will be skipped.
    }) //Parse local files

    //Step3: Read that parsed data
    
    console.log(result.data); //ParseResult<unknown>.data: unknown[]
    /* data - an array of rows. If header is false, rows are arrays; otherwise they are objects of data keyed by the field name.
    [
        { email: 'test1@gmail.com', password: 'test123' },
        { email: 'shreyaa@gmail.com', password: 'shreyaa123' }
    ]
    */

    //To capture row 1 details from CSV file
    let row1:any = result.data[0];
    console.log(row1.email); //test1@gmail.com
    console.log(row1.password); //test123

    //To capture row 2 details from CSV file
    let row2:any = result.data[1];
    console.log(row2.email); //shreyaa@gmail.com
    console.log(row2.password); //shreyaa123

    await page.goto("https://automationplayground.com/crm/login.html");
    await page.getByPlaceholder("Enter email").fill(row1.email);
    await page.getByPlaceholder("Password").fill(row1.password);
    await page.getByRole("button", {name:'Submit'}).click();
})

test("Test for CRMLogin by reading data using CsvReadTS utility file", async({page})=>{

    
    //read data from csv file
    let record = readCSVFile(1);
    
    await page.goto("https://automationplayground.com/crm/login.html");

    await page.getByPlaceholder("Enter email").fill(record.email);
    //assertion for inputvalue
    expect(await page.getByPlaceholder("Enter email").inputValue()).toBe("shreyaa@gmail.com");

    await page.getByPlaceholder("Password").fill(record.password);
    //assertion for inputvalue
    expect(await page.getByPlaceholder("Password").inputValue()).toBe("shreyaa123");

    await page.getByRole("button", {name:'Submit'}).click();

    await page.waitForTimeout(2000);

})