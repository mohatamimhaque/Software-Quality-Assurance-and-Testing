import { expect, test } from "../fixtures/custom-fixtures";
import { faker } from '@faker-js/faker';
import ENV from "../utils/env"

test.describe('Registration Feature', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(ENV.BASE_URL);
    });

    test('Verify that User successfully navigate to register page from home page', async ({ commonPage, registerPage, page }) => {
        const user = {
            email: faker.internet.email(),
        };
        
        await test.step("User click the register button from navbar", async () => {
            await commonPage.clickRegisterButtonFromTopBar();
            await page.waitForURL(/.*register/, { waitUntil: 'networkidle' });
        })

        await test.step("Verify user is in the register page", async () => {
            await expect(page).toHaveURL(/.*register/);
        })
        await test.step('When user enter all required field with valid data', async () => {
            const password = faker.internet.password({ length: 12, memorable: true });

            await registerPage.checkGenderCheckbox('male')
            await registerPage.inputFirstName(faker.person.firstName());
            await registerPage.inputLastName(faker.person.lastName());
            await registerPage.inputCompanyName(faker.company.name());
            await registerPage.uncheckNewsletterCheckbox();
            await registerPage.inputPassword(password);
            await registerPage.inputConfimrPassword(password);

        })

        await test.step('Then user click the register button', async () => {
            await registerPage.clickRegisterButton();
        })

        await test.step('Then user should be shown to navigate to registered success page', async () => {
            await expect(page).toHaveURL(/.*registerresult/);
        })

    });


})
