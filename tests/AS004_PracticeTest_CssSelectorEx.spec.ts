/*
Assignment 4: Automate from website 3 test cases with css selector
Navigate to this application: https://practicetestautomation.com/practice-test-login/

TestData: Use next credentials to execute Login: Username: student | Password: Password123
*/


import {test,expect, Locator} from "@playwright/test";

/*
Test case 1: Positive LogIn test
Open page
Type username 'student' into Username field
Type password 'Password123' into Password field
Push Submit button
Verify new page URL contains practicetestautomation.com/logged-in-successfully/
Verify new page contains expected text ('Congratulations' or 'successfully logged in')
Verify button Log out is displayed on the navigated page.
*/

test("Test case 1: Positive LogIn test",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.locator("input#username").fill("student");
    await page.locator("input#password").fill("Password123");
    await page.locator("button#submit").click()

    //Verify new page URL contains - practicetestautomation.com/logged-in-successfully/
    await expect(page).toHaveURL(/practicetestautomation.com\/logged-in-successfully\//);

    //Verify new page contains expected text ('Congratulations' or 'successfully logged in')
    let msg:string = await page.locator("strong").first().innerText();
    console.log("The message is: " + msg); //capturing messages
    
    //Page Level assertion
    await expect(page.locator("strong").first()).toContainText("Congratulations"); 
    //OR
    await expect(page.locator("strong").first()).toContainText("successfully logged in");
    
    //Verify button Log out is displayed on the navigated page.
    console.log("Is Logout button displayed on the page? : " + await page.locator("a.wp-block-button__link").isVisible());
})


/*
Test case 2: Negative username test
Open page
Type username 'incorrectUser' into Username field
Type password 'Password123' into Password field
Push Submit button
Verify error message is displayed
Verify error message text is 'Your username is invalid!'
*/

test("Test case 2: Negative username test",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.locator("input#username").fill("incorrectUser");
    await page.locator("input#password").fill("Password123");
    await page.locator("button#submit").click()

    //Verify error message is displayed
    console.log("Is error message shown? : " + await page.locator("div#error").isVisible());

    //Variable level assertion
    let errorMessage:string = await page.locator("div#error").innerText();
    console.log("The error message : " + errorMessage);
    
    // Verify error message text is 'Your username is invalid!'
    expect(errorMessage).toBe("Your username is invalid!"); 
})

/*
Test case 3: Negative password test
Open page
Type username 'student' into Username field
Type password 'incorrectPassword' into Password field
Push Submit button
Verify error message is displayed
Verify error message text is 'Your password is invalid!'
*/

test("Test case 3: Negative password test",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.locator("input#username").fill("student");
    await page.locator("input#password").fill("incorrectPassword");
    await page.locator("button#submit").click();

    //Verify error message is displayed
    console.log("Is error message shown? : " + await page.locator("div#error").isVisible());

    //Variable level assertion
    let errorMessage:string = await page.locator("div#error").innerText();
    console.log("The error message : " + errorMessage);
    
    // Verify error message text is 'Your password is invalid!'
    expect(errorMessage).toBe("Your password is invalid!");
    
})