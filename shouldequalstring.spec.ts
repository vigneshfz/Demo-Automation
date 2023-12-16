import { test, expect } from '@playwright/test';

test('Assert String Equality in Playwright TypeScript', async ({ page }) => {
  // Assume you have a string value that you want to test
 // const actualString = 'A simple div';

  await page.goto('https://practice.expandtesting.com/');
    await page.getByRole('link', { name: 'Should Equal' }).click();


    //const sample = await page.locator(`(//div[contains(text(),'A simple')])`)
    await expect(page.getByText('A simple div'), 'Minimum characters for the name field is 3').toHaveText('A simple di');
  // Assert that the string is equal to a reference string
// await expect(sample).toHaveText('A simple div');
//  console.log(sample)

  //  use toBe for strict equality
 // expect(sample).toBe('A simple div');

  // If you want to test for inequality, you can use toEqual with a different string
 // expect(sample).not.toEqual('Goodbye, World!');
});


  
