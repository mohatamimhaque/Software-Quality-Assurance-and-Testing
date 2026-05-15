import { Locator, Page } from "playwright/test";


export default class WebUtilityThing{
     readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    static async waitForVisible(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
  }

    static async clearInput(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
    await locator.fill('');
  }


}