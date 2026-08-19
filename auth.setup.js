const { chromium } = require('@playwright/test');

(async () => {
    const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await context.storageState({ path: 'auth.json' });

    await browser.close();
})();