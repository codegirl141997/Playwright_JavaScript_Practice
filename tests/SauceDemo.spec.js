const { test, expect } = require('@playwright/test');

test('SauceDemo', async ({ browser, page }) => {
  await page.goto("https://www.saucedemo.com");
  

await page.locator('#user-name').fill("standard_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('#login-button').click();
await page.locator('add-to-cart-sauce-labs-backpack').textContent();
});