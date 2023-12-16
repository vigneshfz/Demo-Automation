import {test} from '@playwright/test'

test('Move slider', async ({ page, context }) => {

    await page.goto('https://material.angular.io/components/slider/examples')
    const sliderTrack = await page.locator('.mdc-slider__track').first()
    const sliderOffsetWidth = await sliderTrack.evaluate(el => {
        return el.getBoundingClientRect().width
    })

    // Using the hover method to place the mouse cursor then moving it to the right
    await sliderTrack.hover({ force: true, position: { x: 0, y: 0 } })
    await page.mouse.down()
    await sliderTrack.hover({ force: true, position: { x: sliderOffsetWidth, y: 0 } })
    await page.mouse.up()

})