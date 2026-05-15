import { faker } from "@faker-js/faker";
import { expect, test } from "../fixtures/custom-fixtures";
import { loginPageErrorList } from "../test-data/validation-message";
import ENV from "../utils/env";


test.describe('Login fetaure', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(ENV.BASE_URL);
    });

    test('The user is able to login successfully by valid credentials', async ({ page, loginPage, commonPage }) => {
        await test.step('The login page should be shown to user', async () => {
            await page.goto(`${ENV.BASE_URL}/login`);
            await page.waitForURL(/.*login/, { waitUntil: 'networkidle' });
            await expect(page).toHaveURL(/.*login/);

        });

        await test.step('The user enters with valid email and password', async () => {
            await loginPage.enterEmail(ENV.TEST_CUSTOMER_EMAIL);
            await loginPage.enterPassword(ENV.TEST_CUSTOMER_PASSWORD);

        });

        await test.step('The user clicks the login button', async () => {
            await loginPage.clickLoginButton();
        })

        await test.step('The user should see a success message after clicking the login button', async () => {
            await expect(commonPage.getlogOutMenuButton(), 'The page should be logged in').toBeVisible();

        })

    });

})