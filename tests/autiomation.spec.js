const { test, expect } = require('@playwright/test');

test('Automation', async ({ browser, page }) => {
    await page.goto("https://automationexercise.com/login");


});