import { Locator, Page } from "@playwright/test";

//utilities: Reusable code

export async function scrollDown(page: Page): Promise<void> {
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight)
    })
}

export async function scrollUp(page: Page): Promise<void> {
    await page.evaluate(() => {
        window.scrollTo(document.body.scrollHeight, 0)
    })
}

export async function scrollUpToElement(page: Page, element: Locator): Promise<void> {
    await element.scrollIntoViewIfNeeded();
}


export async function selectSpecificWindow(allPages: Page[], pageTitle: string) {
    for (let p of allPages) {
        if ((await p.title()).includes(pageTitle)) {
            //activate that page
            await p.bringToFront();
            await p.waitForTimeout(2000);
            break;
        }
    }
}