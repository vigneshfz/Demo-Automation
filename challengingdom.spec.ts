import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Challenging DOM' }).click();
  await page.getByRole('row', { name: 'Iuvaret0 Apeirian0 Adipisci0' }).getByRole('link').first().click();
  await page.getByRole('row', { name: 'Iuvaret0 Apeirian0 Adipisci0' }).getByRole('link').nth(1).click();

});
