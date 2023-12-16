

 
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'File Upload' }).click();
    await page.locator("[type='file']").setInputFiles("E:/playright/tests/samplefile.png");
    await page.waitForTimeout(5000);
    await page.locator("[id='fileSubmit']").click();
  
  });