import { Locator, Page } from "@playwright/test";

//utilities: Reusable code

export async function scrollDown(page:Page):Promise<void>
{
    await page.evaluate(()=>{
        window.scrollTo(0, document.body.scrollHeight)
    })
}

export async function scrollUp(page:Page):Promise<void>
{
    await page.evaluate(()=>{
        window.scrollTo(document.body.scrollHeight, 0)
    })
}

export async function scrollUpToElement(page:Page, element:Locator):Promise<void>
{
   await element.scrollIntoViewIfNeeded();
}