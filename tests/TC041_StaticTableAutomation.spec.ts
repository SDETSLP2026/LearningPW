import { test, expect } from "@playwright/test";


test("Test for automating static webtable", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

  await page.getByRole("heading", { name: "Static Web Table", level: 2 }).scrollIntoViewIfNeeded();

  //Scenario 1: Get the heading and print in console
  let allHeadings: string[] = await page.locator("//table[@name='BookTable']//th").allInnerTexts();
  console.log("The count of total headings are: " + allHeadings.length);
  console.log("All headings of the table: " + allHeadings);

  //Scenario 2: Get the total number of rows
  let allRows: number = await page.locator("//table[@name='BookTable']//tr").count();
  await expect(page.locator("//table[@name='BookTable']//tr")).toHaveCount(allRows);
  console.log("The count of total rows are: " + allRows);

  //Scenario 3: Get the total number of columns
  //3.1 - By Headings
  console.log("The count of total columns are: " + allHeadings);

  //3.2 - By rows
  let allCols: number = await page.locator("//table[@name='BookTable']//tr[1]/td").count();
  await expect(page.locator("//table[@name='BookTable']//tr[2]/td")).toHaveCount(4);
  console.log("The count of total columns are: " + allCols);

  //Scenario 4: Targetting a specific column e.g. Author
  let allAuthorNames: string[] = await page.locator("//table[@name='BookTable']//tr//td[2]").allInnerTexts();
  console.log("All author names are: " + allAuthorNames);

  //Scenario 5: Collect all prices and calculate total
  let allPrices: string[] = await page.locator("//table[@name='BookTable']//tr//td[4]").allInnerTexts();

  let res = allPrices.reduce((total, price) => { total = total + Number(price); return total; }, 0);
  console.log("Total price of all books: " + res);

  /*
  let total:number=0;
  for(let price of allPrice);

  {
      //console.log(typeof price);//string

    //string to number
      let actPrice:number=Number(price);
      total=total+actPrice;
      
  }

  console.log("Total price of allBooks: "+total);
  */

  await page.waitForTimeout(2000);
});
