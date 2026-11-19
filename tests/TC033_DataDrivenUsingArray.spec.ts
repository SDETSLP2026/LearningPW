import {test, expect} from "@playwright/test";

//TestData: JS Array
let testData = [
    {id:1, email:"array_test1@gmail.com",password:"test123"},
    {id:2, email:"array_test2@gmail.com",password:"test123"},
    {id:3, email:"array_test3@gmail.com",password:"test123"},
    {id:4, email:"array_test4@gmail.com",password:"test123"},
]

for(let data of testData) //data is a single row from an array
{
    //console.log(data.email + ":" + data.password);
    //In playwright, every test case title should be unique

    test(`Test for CRM Login using DDT - ${data.id}`, async({page})=>{

        await page.goto("https://automationplayground.com/crm/login.html");

        await page.getByPlaceholder("Enter email").fill(data.email);
        await page.getByPlaceholder("Password").fill(data.password);  
        await page.getByRole('button',{name:'Submit'}).click();

        await page.waitForTimeout(2000);
    })
}