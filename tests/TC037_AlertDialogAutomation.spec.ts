import {test, expect} from "@playwright/test";

//By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them.

test("Test for Rediff simple alert automation auto-dismiss by PW", async({page})=>{

    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

    //Click on login button
    await page.getByRole("button",{name:'Log In'}).click();

    //Here, alert will open and auto dismiss by PW.

    //email
    await page.locator("input.email-input").fill("redifftest1");

    await page.waitForTimeout(2000);
})

test("Test for Rediff simple alert automation accepted manually", async({page})=>{

    //dialog event you should trigger before alert opens
    page.on('dialog', async(alertBox)=>{ //here 'alertBox' is variable name - which point to current alert window

        console.log("---------- Manually alert handling ---------- ");
        console.log("Current active alert type is: " + alertBox.type()); 
        //type() - Returns dialog's type, can be one of alert, beforeunload, confirm or prompt.
        
        console.log("Current active alert text is: " + alertBox.message());
        //message() - A message displayed in the dialog.
        
        //Click on Ok
        await alertBox.accept();
    }) 

    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

    //Click on login button
    await page.getByRole("button",{name:'Log In'}).click();

    //Here, page.on('dialog') event will trigger.

    //email
    await page.locator("input.email-input").fill("redifftest2");

    await page.waitForTimeout(2000);
})

//---------------------------------------------------------------------------------------
//Automate button1 - Click for JS Alert
test("Test for HerokuApp simple JS Alert automation accepted manually",async({page})=>{

    //Trigger dialog event
    page.on('dialog', async(alertBox)=>{
        if(alertBox.type() === 'alert')
        {
            console.log("---------- Manually alert handling ---------- ");
            console.log("Current active alert type is: " + alertBox.type());
            console.log("Current active alert text is: " + alertBox.message());

            //Click on 'Ok' button of the alert box
            await alertBox.accept();
        }
    })

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //Click on button1 - Click for JS Alert
    await page.locator("//button").first().click();

    //Here, page.on('dialog') event will trigger.

    //assert this alertstep: current locator matching with text
    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");

    //console.log("Simple alert Autodismissed by playwright!");
    console.log("Result is: " + await page.locator("#result").innerText());
    
    console.log("Simple JS alert is accepted manually.");

    await page.waitForTimeout(2000);
})

//---------------------------------------------------------------------------------------
//Automate button2 - Click for JS Confirm
test("Test for HerokuApp JS confirmation alert auto-dismiss by PW", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //Click on button2 - Click for JS Confirm
    await page.locator("//button").nth(1).click();

    //Now, alert will appear and auto dismiss by PW. That means PW clicked default on 'Cancel' button.

    await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
    console.log("Result is: " + await page.locator("#result").innerText());
    console.log("JS Confirmation alert is auto-dismiss by PW.");
})

test("Test for HerokuApp confirmation alert dismiss manually", async({page})=>{

    //trigger dialog event
    page.on("dialog", async(alertBox)=>{
        if(alertBox.type() === 'confirm')
        {
            console.log("---------- Manually confirmation alert handling ---------- ");
            console.log("Current active alert type is: " + alertBox.type());
            console.log("Current active alert text is: " + alertBox.message());

            ////Click on 'Cancel' button of the alert box
            await alertBox.dismiss();
        }
    })

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //Click on button2 - Click for JS Confirm
    await page.locator("//button").nth(1).click();

    //Here, page.on('dialog') event will trigger.

    await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
    console.log("Result is: " + await page.locator("#result").innerText());
    
    console.log("JS Confirmation alert is dismissed manually.");

})

test("Test for HerokuApp confirmation alert accepted manually", async({page})=>{

    //trigger dialog event
    page.on("dialog", async(alertBox)=>{
        if(alertBox.type() === 'confirm')
        {
            console.log("---------- Manually confirmation alert handling ---------- ");
            console.log("Current active alert type is: " + alertBox.type());
            console.log("Current active alert text is: " + alertBox.message());

            ////Click on 'Ok' button of the alert box
            await alertBox.accept();
        }
    })

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //Click on button2 - Click for JS Confirm
    await page.locator("//button").nth(1).click();

    //Here, page.on('dialog') event will trigger.

    await expect(page.locator("#result")).toHaveText("You clicked: Ok");
    console.log("Result is: " + await page.locator("#result").innerText());
    console.log("JS Confirmation alert is accepted manually.");

})

//---------------------------------------------------------------------------------------

test("Test for HerokuApp prompt alert auto-dismiss by PW", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //Click on button3 - Click for JS Prompt
    await page.locator("//button").last().click();

    //Now, alert will appear and auto dismiss by PW. That means PW clicked on 'Cancel' button.

    console.log("Result is: " + await page.locator("#result").innerText());
    await expect(page.locator("#result")).toHaveText("You entered: null");
    console.log("JS Prompt alert is auto-dismiss by PW.!");
})

test("Test for HerokuApp prompt alert dismiss manually", async({page})=>{

    //trigger dialog event
    page.on("dialog", async(alertBox)=>{
        if(alertBox.type() === 'prompt')
        {
            console.log("---------- Manually prompt alert handling ---------- ");
            console.log("Current active alert type is: " + alertBox.type());
            console.log("Current active alert text is: " + alertBox.message());

            //Click on 'Cancel' button of the alert box
            await alertBox.dismiss();
        }
    })

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //Click on button3 - Click for JS Prompt
    await page.locator("//button").last().click();

    //Here, page.on('dialog') event will trigger.

    await expect(page.locator("#result")).toHaveText("You entered: null");
    console.log("Result is: " + await page.locator("#result").innerText());
    console.log("JS Prompt alert is auto-dismiss manually.");

})

test("Test for HerokuApp prompt alert accepted manually", async({page})=>{

    //trigger dialog event
    page.on("dialog", async(alertBox)=>{
        if(alertBox.type() === 'prompt')
        {
            console.log("---------- Manually prompt alert handling ---------- ");
            console.log("Current active alert type is: " + alertBox.type());
            console.log("Current active alert text is: " + alertBox.message());

            //Click on 'Ok' button of the alert box
            await alertBox.accept("Hello All...!");
        }
    })

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //Click on button3 - Click for JS Prompt
    await page.locator("//button").last().click();

    //Here, page.on('dialog') event will trigger.

    await expect(page.locator("#result")).toHaveText("You entered: Hello All...!");
    console.log("Result is: " + await page.locator("#result").innerText());
    console.log("JS Prompt alert is accepted manually.");

})