
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Radio Buttons' }).click();
  await page.getByLabel('Blue').check();
  await page.getByLabel('Red').check();
  await page.getByLabel('Yellow').check();
  await page.getByLabel('Black').check();
  await page.locator('div:nth-child(5)').click();
  await page.getByLabel('Basketball').check();
  await page.getByLabel('Football').check();
  await page.getByLabel('Tennis').check();
});