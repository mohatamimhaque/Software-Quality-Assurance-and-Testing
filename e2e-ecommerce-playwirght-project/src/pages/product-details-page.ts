import { Page, Locator } from "playwright/test";


export default class ProductDetailsPage {
    readonly page: Page

    readonly productTitle: Locator;
    readonly skuVerify: Locator;
    readonly addToCartButton: Locator;
    readonly addQuantity: Locator;
    readonly notificationAfterAddToCart: Locator;


    constructor(page: Page) {
        this.page = page;
        this.skuVerify = page.locator("//span[@class='label']/following-sibling::span[1]");
        //this.addQuantity = page.locator("//input[@class='qty-input valid']");
        this.addQuantity =  page.getByRole('textbox', { name: 'Enter a quantity' })

        this.addToCartButton = page.locator("(//button[@type='button'])[2]");
        this.notificationAfterAddToCart = page.locator("//div[@class='bar-notification success']");

    }

    async inputQuanity(quantity: string) {
       await this.addQuantity.waitFor({ state: 'visible' });
       const currentValue = await this.addQuantity.inputValue();
        if (currentValue !== '') {
            await this.addQuantity.fill('');
        }
        await this.addQuantity.fill(quantity)

    }

        verifySku(): Locator {
          this.skuVerify.waitFor(
            {
                state: 'visible'
            }
        );
        return this.skuVerify;
    }

    async clickAddTocartButton() {
        await this.addQuantity.click();
    }

    async VerifyAddToCartNotification(): Promise<Locator> {
        await this.notificationAfterAddToCart.waitFor({ state: 'visible' });
        return this.notificationAfterAddToCart;
    }
}