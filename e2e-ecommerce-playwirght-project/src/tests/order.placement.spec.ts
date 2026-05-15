import ENV from "../utils/env";
import { expect, test } from "../fixtures/custom-fixtures";
import * as formData from "../test-data/order-placement-data.json";
import testProductData from "../test-data/product-data.json"

test.describe('Complete order process feature', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(ENV.BASE_URL);
  });


  test('Verify that the user is able to complete the checkout process and place an order', async ({ page, loginPage, orderPlacementPage, productDetailsPage,commonPage }) => {
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
    for (const product of testProductData.products) {

      await test.step('Verify add multiple products to cart', async () => {
        await page.goto(`${ENV.BASE_URL}${product.slug}`)
        await expect(page).toHaveURL(`${ENV.BASE_URL}${product.slug}`);
      });

      await test.step('Enter quantity and add the product to the cart', async () => {
        await productDetailsPage.inputQuanity(product.sku);
        await expect(productDetailsPage.verifySku()).toHaveText(product.sku)
        await productDetailsPage.clickAddTocartButton();
        await productDetailsPage.VerifyAddToCartNotification();
      });

    }

    await test.step('Verify that the cart icon reflects the correct quantity', async () => {
      const cartCount = page.locator("//span[@class='cart-label']/following-sibling::span[1]");
      await expect(cartCount).toHaveText('6');
    });

    await test.step('Navigate to the cart page', async () => {
      await page.goto(`${ENV.BASE_URL}/cart`)
      await expect(page).toHaveURL(/.*cart/);
    });

    await test.step('Accept terms and proceed to checkout', async () => {

      orderPlacementPage.termsAndConditionCheckBox();
      orderPlacementPage.clickCheckoutButton();
    });

    await test.step('Verify whether checkbox is enabled', async () => {
      orderPlacementPage.checkShipToShameAddres()
    })

    await test.step('Fill in a valid billing address', async () => {
      const billing = formData.billingAddress;
      await orderPlacementPage.enterFirstName(billing.firstName);
      await orderPlacementPage.enterLastName(billing.lastName);
      await orderPlacementPage.enterEmail(billing.email);
      await orderPlacementPage.enterCompany(billing.company);
      await orderPlacementPage.selectCountry(billing.country);
      await orderPlacementPage.selectState(billing.stateProvince);
      await orderPlacementPage.enterCity(billing.city);
      await orderPlacementPage.enterAddress1(billing.address1);
      await orderPlacementPage.enterAddress2(billing.address2);
      await orderPlacementPage.enterZip(billing.zipPostalCode);
      await orderPlacementPage.enterPhone(billing.phoneNumber);
      await orderPlacementPage.enterFax(billing.faxNumber);
    });

    await test.step('Select a shipping method', async () => {
      await orderPlacementPage.clickShippingMethodButton();
    });

    await test.step('Select a payment method and view payment details', async () => {
      await expect(page.locator('#payment-info')).toBeVisible();
      await orderPlacementPage.clickPaymentInformationButton();
    });

    await test.step('Confirm the order', async () => {
      await orderPlacementPage.clickConfirmOrderButton();
      await expect(page).toHaveURL(/.*order-confirmation/);

    });
    await test.step('Verify the order success message', async () => {
      await expect(orderPlacementPage.orderExpectedResult(), 'Order is failed').toBeVisible({
        timeout: 10_000,
      });
    });

  });
});

