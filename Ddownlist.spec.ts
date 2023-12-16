import { test, expect } from '@playwright/test';

test('dropdownlist', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Dropdown List' }).click();
  await page.locator('#dropdown').selectOption('1');
  await page.getByLabel('Elements per Page:').selectOption('50');
  await page.locator('#country').selectOption('AU');
});