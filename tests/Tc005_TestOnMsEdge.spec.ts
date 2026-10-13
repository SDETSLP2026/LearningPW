
import {test,expect,chromium,Browser,Page,BrowserContext} from "@playwright/test"

test("Test on microsoft Edge browser",async({})=>{

    //open browser:MicrosoftEdge browser
    let browser:Browser=await chromium.launch({channel:'msedge',headless:false});
    
    //context
    let browserContext:BrowserContext=await browser.newContext();
    
    //page
    let page:Page=await browserContext.newPage();
    
    await page.goto("https://www.amazon.in");
    
    //pause
    await page.waitForTimeout(4000);
    
    console.log(await page.title());
        
    await page.close();
    await browserContext.close();
})