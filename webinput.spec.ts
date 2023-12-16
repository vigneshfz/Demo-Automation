import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Web inputs' }).click();
  await page.getByLabel('Input: Number').click();
  await page.getByLabel('Input: Number').fill('1');
  await page.getByLabel('Input: Text').click();
  await page.getByLabel('Input: Text').fill('test');
  await page.getByLabel('Input: Password').click();
  await page.getByLabel('Input: Password').fill('pass');
  await page.getByLabel('Input: Date').fill('2023-12-24');
});






