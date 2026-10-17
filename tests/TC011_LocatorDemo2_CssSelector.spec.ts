import {test, expect} from "@playwright/test";

test("Test for CssSelector allSyntax", async({page})=>{

    //Open application
    await page.goto("https://automationplayground.com/crm/");

    //SignIn link: TagName with ID
    await page.locator("a#SignIn").click(); //a#SignIn OR #SignIn

    //assertion: After click, login page should be displayed.
    await expect(page).toHaveURL(/login/);
    console.log("User is navigated to Login page.");
    
    //Email - TagName with ID 
    await page.locator("input#email-id").fill("test@gmail.com");
    
    //Password - TagName with Attribute
    await page.locator("input[type='password']").fill("test123");

    //Remember Me checkbox - TagName with Attribute
    await page.locator("input[type='checkbox']").click();
    // Checkboxes & Radio buttons - check() & uncheck()
    await page.waitForTimeout(1000); //Adding wait to see check & uncheck operations
    await page.locator("input[type='checkbox']").uncheck();
    await page.waitForTimeout(1000); //Adding wait to see check & uncheck operations
    await page.locator("input[type='checkbox']").check();


    //submit button - TagName with ID
    await page.locator("button.btn-primary").click(); //class name attribute is used

    //assert for the text written on page/to get the page
    //Way#01
    // let node:string|null = await page.locator("#new-customer").textContent(); //Returns the node.textContent.
    // console.log("Node is: " + node);
    // expect(node).toBe("New Customer");  //Variable level assertion
    
    //Way#02
    let text:string = await page.locator("#new-customer").innerText(); //Returns the element.innerText => recommended
    console.log("Text is: " + text);
    //expect(text).toBe("New Customer"); //Variable level assertion
    //OR
    await expect(page.locator("#new-customer")).toHaveText("New Customer"); //Page level assertion

    await page.waitForTimeout(2000);


})