

import { test, expect } from '@playwright/test';

test('JavaScript Dialogs', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'JavaScript Dialogs' }).click();
  await page.getByRole('button', { name: 'Js Alert' }).click();
  await page.getByText('ok').click();
  await page.getByRole('button', { name: 'Js Confirm' }).click();
//   await page.getByRole('button', { name: 'ok' }).click();
//   //await page.getByText('ok').click();
//   await page.getByRole('button', { name: 'Js Prompt' }).click();
//   await page.getByText('ok').click();

});
