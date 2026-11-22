/*
Assignment 16: frame
=========================
Navigate to https://ui.vision/demo/webtest/frames/ app 
1. Automate frame 3 with Radio, checkbox selections -> Next -> Enter short & long text -> Submit the form.
2. Automate nested frame with frame4 and frame5.
*/

import {test, expect, FrameLocator, Frame} from "@playwright/test";

test("Test for iFrame automation", async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //Automate Google form inside Frame 3
    
    //Step 1: Locate Frame-3
    let frame3:FrameLocator = page.frameLocator("frame[src='frame_3.html']");
    
    //Step 2: Locate text-field & enter input
    frame3.locator("input[name='mytext3']").fill("This is Form 3 text field.");
    
    //Step 3: Locate nested Frame and select radio option 'I am human'
    let innerFrame = frame3.frameLocator("//iframe");
    await innerFrame.locator("div[aria-label='I am a human']").check();

    //Step 4: Locate nested Frame & select checkboxes for Web Testing, Form Autofilling, General Web Automation
    await innerFrame.locator("div[aria-label='Web Testing']").check();
    await innerFrame.locator("div[aria-label='Form Autofilling']").check();
    await innerFrame.locator("div[aria-label='General Web Automation']").check();

    await innerFrame.getByRole("button", {name: 'Next'}).click();

    await innerFrame.locator("//input[@jsname='YPqjbf']").fill("This is a short text entered into text-field");

    await innerFrame.locator("//textarea[@jsname='YPqjbf']").fill("This is a long text entered into text-area");

    await innerFrame.getByRole("button", {name: 'Submit'}).click();

    //----------------------------------------------------------------------------

    //Automate for frame 4
    await page.frameLocator("frame[src='frame_4.html']").locator("input[name='mytext4']").fill("This is Form 4 text field.");

    //----------------------------------------------------------------------------

    //Automate for frame 5
    await page.frameLocator("frame[src='frame_5.html']").locator("input[name='mytext5']").fill("This is Form 5 text field.");

    await page.waitForTimeout(2000);
})