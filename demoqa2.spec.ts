import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto ('https://demoqa.com/');


  await page.getByText('Elements').click();
  await page.getByText('Buttons').click();
  await page.locator('[id="doubleClickBtn"]').dblclick();
  await page.getByText('Forms').click();
   await page.getByText('Practice Form').click();
  // await page.getByText('Alerts, Frame & Windows').click();
  // await page.getByText('Modal Dialogs').click();
   
  // await page.locator('[id="showSmallModal"]').click();
  // await page.getByText('Close').click();
  await page.getByText('Widgets').click();
  await page.getByText('Tabs').click();
  await page.locator('[id="demo-tab-origin"]').click();
  await page.getByText('Interactions').click();
 
  await page.getByText('Book Store Application').click();
  await page.getByText('Speaking JavaScript').click();
 await page.locator('[id="addNewRecordButton"]').click();
});



