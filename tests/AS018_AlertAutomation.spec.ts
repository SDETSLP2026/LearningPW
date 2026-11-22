/*
Assignment 18: Alert
==========================
Navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html app
and just automate alerts
Simple alert - 
    Auto-dismiss by PW (Click on OK button) - No message to verify
    Dismiss manually (Click on OK button) - No message to verify
Confirmation alert - 
    Auto-dismiss by PW (Click on Cancel button) | Verify message - You pressed Cancel!
    Dismiss manually (Click on Cancel button) | Verify message - You pressed Cancel!
    Accept manually (Click on OK button) | Verify message - You pressed OK!
Prompt alert with result - 
    Auto-dismiss by PW (Click on Cancel button) | Verify message - User cancelled the prompt.
    Dismiss manually (Click on Cancel button) | Verify message - User cancelled the prompt.
    Enter name 'Swapnil Padekar' & Accept manually (Click on OK button) | Verify message - Hello Swapnil Padekar! How are you today?
*/

import {test, expect, Locator} from "@playwright/test";

test("Test Simple Alert - Auto-dismiss by PW (Click on OK button)", async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.getByText("Simple Alert").click();

    await page.waitForTimeout(2000);

})

test("Test Simple Alert - Dismiss manually (Click on OK button)", async({page})=>{

    //trigger dialog event
    page.on('dialog', async(alertBox)=>{ //here 'alertBox' is variable name - which point to current alert window

        console.log("Test simple alert - Dismiss manually (Click on OK button)");
        console.log("Current active alert type is: " + alertBox.type()); //alert
        console.log("Current active alert text is: " + alertBox.message()); //I am an alert box!
                
        //Click on Ok
        await alertBox.accept();
    }) 
    
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.getByText("Simple Alert").click();

    await page.waitForTimeout(2000);
})

//-------------------------------------------------------------------------------------------------------------

test("Test Confirmation Alert - Auto-dismiss by PW (Click on OK button)", async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.getByText("Confirmation Alert").click();

    await page.waitForTimeout(2000);

})

test("Test Confirmation Alert - Dismiss manually (Click on Cancel button)", async({page})=>{

    //trigger dialog event
    page.on("dialog", async(alertBox)=>{
        if(alertBox.type() === 'confirm')
        {
            console.log("Test Confirmation Alert - Dismiss manually (Click on Cancel button)");
            console.log("Current active alert type is: " + alertBox.type()); //confirm
            console.log("Current active alert text is: " + alertBox.message()); //Press a button!

            //Click on 'Cancel' button of the alert box
            await alertBox.dismiss();
        }
    })

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await page.getByText("Confirmation Alert").click();

    //Locator for the message - //p[@id='demo']
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed Cancel!");
    console.log("Result is: " + await page.locator("//p[@id='demo']").innerText()); //You pressed Cancel!

    await page.waitForTimeout(2000);
})

test("Test Confirmation Alert - Accept manually (Click on OK button)", async({page})=>{

    //trigger dialog event
    page.on("dialog", async(alertBox)=>{
        if(alertBox.type() === 'confirm')
        {
            console.log("Test Confirmation Alert - Accept manually (Click on OK button)");
            console.log("Current active alert type is: " + alertBox.type()); //confirm
            console.log("Current active alert text is: " + alertBox.message()); //Press a button!

            //Click on 'OK' button of the alert box
            await alertBox.accept();
        }
    })

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await page.getByText("Confirmation Alert").click();

    //Locator for the message - //p[@id='demo']
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
    console.log("Result is: " + await page.locator("//p[@id='demo']").innerText()); //You pressed OK!

    await page.waitForTimeout(2000);
})

//-------------------------------------------------------------------------------------------------------------

test("Test Prompt Alert - Auto-dismiss by PW (Click on OK button)", async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.getByText("Prompt Alert").click();

    await page.waitForTimeout(2000);

})

test("Test Prompt Alert - Dismiss manually (Click on Cancel button)", async({page})=>{

    //trigger dialog event
    page.on("dialog", async(alertBox)=>{
        if(alertBox.type() === 'prompt')
        {
            console.log("Test Prompt Alert - Dismiss manually (Click on Cancel button)");
            console.log("Current active alert type is: " + alertBox.type()); //prompt
            console.log("Current active alert text is: " + alertBox.message()); //Please enter your name:

            //Click on 'Cancel' button of the alert box
            await alertBox.dismiss();
        }
    })

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await page.getByText("Prompt Alert").click();

    //Locator for the message - //p[@id='demo']
    await expect(page.locator("//p[@id='demo']")).toHaveText("User cancelled the prompt.");
    console.log("Result is: " + await page.locator("//p[@id='demo']").innerText()); //User cancelled the prompt.

    await page.waitForTimeout(2000);
})


test("Test Prompt Alert - Enter name 'Swapnil Padekar' & Accept manually (Click on OK button)", async({page})=>{

    //trigger dialog event
    page.on("dialog", async(alertBox)=>{
        if(alertBox.type() === 'prompt')
        {
            console.log("Test Prompt Alert - Enter name 'Swapnil Padekar' & Accept manually (Click on OK button)");
            console.log("Current active alert type is: " + alertBox.type()); //prompt
            console.log("Current active alert text is: " + alertBox.message()); //Please enter your name:

            //Click on 'Cancel' button of the alert box
            await alertBox.accept("Swapnil Padekar");
        }
    })

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await page.getByText("Prompt Alert").click();

    //Locator for the message - //p[@id='demo']
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Swapnil Padekar! How are you today?");
    console.log("Result is: " + await page.locator("//p[@id='demo']").innerText()); //Hello Swapnil Padekar! How are you today?

    await page.waitForTimeout(2000);
})