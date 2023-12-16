import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Shadow DOM' }).click

  
await page.locator('[id="my-btn"]').click();
await page.getByText('This button is inside a Shadow DOM.').click()
});

