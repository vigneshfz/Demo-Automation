import { test, expect } from '@playwright/test';


test('Assert Value Equality in Playwright TypeScript', async ({ page }) => {
    const actualValue = 2023;
    //const pageTitle = await page.title();

    await page.goto('https://practice.expandtesting.com/');
    await page.getByRole('link', { name: 'Should Equal' }).click();
  // Assume you have a value that you want to test
 

  // Assert that the value is equal to a reference value
  expect(actualValue).toEqual(2023);

  //  toBe for strict equality
  expect(actualValue).toBe(2023);


  // If you want to test for inequality, you can use toEqual with a different value
  expect(actualValue).not.toEqual(3000);
});


