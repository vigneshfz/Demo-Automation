import { test, expect } from '@playwright/test';
  test('Should contain a specific string', async ({ page }) => {
    await page.goto('https://example.com'); // Replace with your URL

    // Use the `innerText` method to get the text content of an element
    const pageContent = await page.innerText('body');

    // Assert that the page contains a specific string
    expect(pageContent).toContain('Your Expected String');
  });
