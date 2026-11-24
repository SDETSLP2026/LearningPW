/*
Assignment 20: Window Handling
============================
Navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html
automate new-tab and new-window scenarios
*/

import { test, expect, Browser, chromium, BrowserContext, Page } from "@playwright/test";

test("Test for New Tab and New Window Handling Scenarios", async () => {

  let browser: Browser = await chromium.launch({ channel: "chrome" });
  let context: BrowserContext = await browser.newContext();
  let page: Page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

  //Clicking on 'New Tab' button
  await page.getByText("New Tab").click();

  //-----------------------------------------------------------------------------------------
  //Clicking on 'Popup Windows' button
  await page.getByText("Popup Windows").click();
});
