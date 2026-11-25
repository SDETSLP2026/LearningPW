/*
Assignment 20: Window Handling
============================
Navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html
automate new-tab and new-window scenarios
*/

import { test, expect, Browser, chromium, BrowserContext, Page } from "@playwright/test";

test("Test for New Tab Handling Scenarios", async () => {

  let browser: Browser = await chromium.launch({ channel: "chrome" });
  let context: BrowserContext = await browser.newContext();
  let page: Page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");


  let [childWindow] = await Promise.all([
    context.waitForEvent('page'), //This monitors context
    await page.getByText("New Tab").click() //Clicking on 'New Tab' button
  ])

  console.log("Total pages open: " + context.pages().length);
  expect(await childWindow.title()).toBe("SDET-QA Blog");
  console.log("The child window page title is: " + await childWindow.title());
})


test("Test for New Window Handling Scenarios", async () => {

  let browser: Browser = await chromium.launch({ channel: "chrome" });
  let context: BrowserContext = await browser.newContext();
  let page: Page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

  let [childWindow] = await Promise.all([
    context.waitForEvent('page'), //This monitors context
    await page.getByText("Popup Windows").click() //Clicking on 'Popup Windows' button
  ])

  console.log("Total pages open: " + context.pages().length);
  expect(await childWindow.title()).toBe("Selenium");
  console.log("The child window page title is: " + await childWindow.title());
})