const {test, expect} = require('@playwright/test');
test('Radio_Button', async ({ browser, page }) =>
{
    const username = page.locator("#username");
        const paasword = page.locator("#password");
        const Select_Dropdown =page.locator("select.form-control");
        const submit_btn= page.locator("#signInBtn");

        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await(page.title));
        await username.fill("rahulshettyacademy ");
        await paasword.fill("Learning@830$3mK2")
        await page.locator(".radiotextsty").last().click();
        await page.locator("#okayBtn").click();
       await Select_Dropdown.selectOption("consult");
       console.log(await page.locator(".radiotextsty").last().isChecked());
       expect(page.locator(".radiotextsty").last()).toBeChecked();
}
);