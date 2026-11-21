import {test, expect, FrameLocator} from "@playwright/test";

test("Test for nested iFrames", async({page})=>{

    await page.goto("https://selectorshub.com/iframe-scenario/");

    //identify frame
    let frame1:FrameLocator = page.frameLocator("(//iframe[@id='pact1'])[1]");

    //locate the element inside the frame
    await frame1.locator("#inp_val").fill("Selenium");

    //Navigate from frame1 to frame2
    let frame2:FrameLocator = frame1.frameLocator("(//iframe[@id='pact2'])[1]");
    await frame2.locator("#jex").fill("Playwright");

    //Navigate from frame2 to frame3
    await frame2.frameLocator("(//iframe[@id='pact3'])[1]").locator("#glaf").fill('AI Automation');

    await page.waitForTimeout(2000);
})