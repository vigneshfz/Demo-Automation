import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Google Tracking Events' }).click();

  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('vigneshmks2409@gmail.com');

  await page.getByLabel('Message').click();
  await page.getByLabel('Message').fill('Test');
  await page.getByRole('button', { name: 'Submit'}).click();
  await page.getByRole('button', { name: 'Click Me' }).click();
  await page.getByText('Click Me').click();

});