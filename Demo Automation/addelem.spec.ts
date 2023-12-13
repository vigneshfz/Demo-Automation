import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Add/Remove Elements'}).click();
  await page.getByRole('button', { name: 'Add Element'}).click();
  await page.getByRole('button', { name: 'Delete'}).click();
  });
 