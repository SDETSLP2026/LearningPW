import {test, expect, FrameLocator, Locator, Frame} from "@playwright/test";

test("Test for simple iFrame",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/iframe");

    //Identify frame
    let frameLoc:FrameLocator = page.frameLocator("iframe[id^='mce']");

    //Identify the element inside frame
    let element:Locator=frameLoc.locator("//p");
   
    await element.clear(); //clear the existing text
    
    await element.fill("Hello All!"); //fill the text

    await page.waitForTimeout(2000);

})

test("Test for iframe automation",async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //await page.locator("input[name='mytext1']").fill('frame1 data');...error

    //frame1
    await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']").fill("frame1Data");

    //frame2
    await page.frameLocator("frame[src='frame_2.html']").locator("input[name='mytext2']").fill("frame2 data");

    //frame3
    //await page.frameLocator("frame[src='frame_3.html']").locator("input[name='mytext3']").fill("frame3 data");

    //Nested frame
    let frame3:FrameLocator = page.frameLocator("frame[src='frame_3.html']");
    await frame3.locator("input[name='mytext3']").fill("frame3 data");

    //frame3--->nested iframe--->radio button
    let innerFrame = frame3.frameLocator("//iframe");

    //innerframe--->radio button
    await innerFrame.locator("div[aria-label='I am a human']").check();

    await page.waitForTimeout(2000);
})

test.only("Test for multiple frames count and name with URL of that frame", async({page})=>{

    await page.goto("https://selectorshub.com/iframe-scenario/", {waitUntil: 'domcontentloaded'});

    //await page.waitForLoadState('domcontentloaded');

    await page.waitForTimeout(2000);

    //page.frames():Frame[]: An array of all frames attached to the page.
    let allFrames:Frame[] = page.frames();
    console.log("The count of all frames on the page: " + allFrames.length);//14

    //for every frame get the frame name and url of frame
    
    /*
    1.name(): string
    Returns frame's name attribute as specified in the tag.
    If the name is empty, returns the id attribute instead.

    2.url():string
    Returns frame's url.
    */

    for(let frame of allFrames)
    {
        console.log("Frame name is: " + frame.name());
        console.log("Frame URL is: " + frame.url());
    }

    await page.waitForTimeout(2000);

})

