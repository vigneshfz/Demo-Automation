import { test, expect } from '@playwright/test';

test('Truthy/Falsy Assertion in Playwright TypeScript', async ({ page }) => {
  // Assume you have some value, for example, a boolean
  const isValueTruthy = true;

  await page.goto('https://adactinhotelapp.com/');

   // Wait for navigation or other asynchronous tasks
  //  await page.waitForNavigation();

   // Assert conditions
   const pageTitle = await page.title();
   expect(pageTitle).toBe('Automation Testing Practice Website for UI and '); 
   console.log(pageTitle)
   // Assert that the page title is as expected
   //console.log('Automation Testing Practice Website for UI and API')

   const currentUrl = page.url();
   expect(currentUrl).toContain('adactinhotelapp.com'); // Assert that the current URL contains a specific substring

  // Assert that the value is truthy
  expect(isValueTruthy).toBeTruthy();

  // You can also assert that the value is falsy
  const isValueFalsy = false;
  expect(isValueFalsy).toBeFalsy();
});


