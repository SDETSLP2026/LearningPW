import {test, expect, Locator} from "@playwright/test";

test("Test for get the title of application using JavaScript command", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    console.log(await page.title()); //Automation Testing Practice: PlaywrightPractice

    //Using JS - document.title
    let appTitle = await page.evaluate(()=>{
                        //JS commands
                        return document.title;
                    })

    console.log("Application title is: " + appTitle);
    //Application title is: Automation Testing Practice: PlaywrightPractice
})

test("Test for refresh the webpage using JS commands", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.waitForTimeout(2000);

    await page.reload();

    await page.waitForTimeout(2000);

    //Using JS method - window.history.go()
    await page.evaluate(()=>{
        window.history.go();
    })
})

test("Test for interact and perform action on WebElementusing JS commands",async({page})=>{

    await page.goto("https://formy-project.herokuapp.com/form");

    // await page.getByPlaceholder("Enter first name").fill("Swapnil");

    //Perform actions with JS commands

    await page.evaluate(()=>{
        //document.getElementById('first-name').value="Snehal"
        const fname = document.querySelector("#first-name") as HTMLInputElement;
        fname.value = "Snehal";
    })

    //click on an element
    await page.evaluate(()=>{
        const radioButton = document.querySelector('#radio-button-2') as HTMLElement; //HTMLButtonelement
        radioButton.click();
    })

    await page.waitForTimeout(2000);

})

test("Test for hidden elements using JS commands",async({page})=>{

    await page.goto("https://www.letskodeit.com/practice");

    let inputelement:Locator = page.locator("#displayed-text");
    console.log("Is element displayed on the page?: " + await inputelement.isVisible()); //true
    console.log("Is element hidden on the page?: " + await inputelement.isHidden()); //false
    await inputelement.fill("Hello...");

    //Click on Hide button
    await page.locator("#hide-textbox").click();

    //Now the element is hidden - automation is not possible with playwright
    console.log("Is element displayed on the page?: " + await inputelement.isVisible()); //false
    console.log("Is element hidden on the page?: " + await inputelement.isHidden()); //true
    // await inputelement.fill("Hello...");

    //Hidden element automation can be possible using JS commands
    await page.evaluate(()=>{
        
        let element = document.querySelector("#displayed-text") as HTMLInputElement;
        element.value = "Hello All...!";
    })

    await page.waitForTimeout(1500);

    //Click on show button
    await page.locator("#show-textbox").click();

    await page.waitForTimeout(2000);
})


test("Test for Disable element automation using JS commands",async({page})=>{

    await page.goto("https://www.letskodeit.com/practice");

    let inputElement:Locator = page.locator("#enabled-example-input");
    console.log("Is element disable?:" + await inputElement.isDisabled());//false

    let buttonDisable:Locator = page.locator("#disabled-button");
    buttonDisable.click();

    await page.waitForTimeout(1000);

    console.log("Is element disable?:" + await inputElement.isDisabled());//true

    //enter some data into disable element using PW
    // await inputElement.fill("Hello All"); //This won't be possible - Error

    //To automate disable element - using JS Command
    await page.evaluate(()=>{
        let inputEle = document.querySelector("#enabled-example-input") as HTMLInputElement;
        inputEle.value = "Hello All...";
    })

     console.log("Is element disable?:" + await inputElement.isDisabled());//true

    await page.waitForTimeout(2000);
})