import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Horizontal Slider' }).click();
  const sliderTrack = await page.locator('.sliderContainer').click()
  ()
  const sliderOffsetWidth = await sliderTrack.evaluate(el => {
    return el.getBoundingClientRect().width
})

// Using the hover method to place the mouse cursor then moving it to the right
await sliderTrack.hover({ force: true, position: { x: 0, y: 0 } })
await page.mouse.down()
await sliderTrack.hover({ force: true, position: { x: sliderOffsetWidth, y: 0 } })
await page.mouse.up()
})

