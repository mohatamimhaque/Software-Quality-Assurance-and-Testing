import { test as base } from '@playwright/test';
import RegistrationPage from '../pages/registration-page';
import LoginPage from '../pages/login-page';
import CommonPage from '../pages/common-page';
import OrderPlacementPage from '../pages/order-placement-page';
import ProductDetailsPage from '../pages/product-details-page';


type Pages = {

    registerPage: RegistrationPage;
    loginPage: LoginPage;
    commonPage: CommonPage;
    orderPlacementPage: OrderPlacementPage;
    productDetailsPage: ProductDetailsPage;


}

const test = base.extend<Pages>({

    registerPage: async ({ page }, use) => {
        await use(new RegistrationPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    commonPage: async ({ page }, use) => {
        await use(new CommonPage(page));
    },
    orderPlacementPage: async ({ page }, use) => {
        await use(new OrderPlacementPage(page))

    },
    productDetailsPage: async({page},use) => {
        await use(new ProductDetailsPage(page))
    }

})

export { test };
export const expect = test.expect;

// export const share =sharedPages;
// export const expect = sharedPages.expect;
//export { expect } from '@playwright/test';