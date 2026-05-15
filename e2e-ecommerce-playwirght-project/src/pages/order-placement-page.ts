import { Page, Locator,expect } from '@playwright/test';

export default class OrderPlacementPageEnter {
  readonly page: Page;

  readonly checkBoxofTermsAndCondition: Locator;
  readonly checkoutButton: Locator;

  readonly shipToSameAddress: Locator;

  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly companyField: Locator;
  readonly countryDropdown: Locator;
  readonly stateDropdown: Locator;
  readonly cityField: Locator;
  readonly address1Field: Locator;
  readonly address2Field: Locator;
  readonly zipField: Locator;
  readonly phoneField: Locator;
  readonly faxField: Locator;
  readonly continueBilling: Locator;
  readonly shippingMethod: Locator;
  readonly paymentMethod: Locator;
  readonly paymentInformation: Locator;
  readonly confirmOrder: Locator;
  readonly orderSuccessfulMessage: Locator;

  constructor(page: Page) {
    this.page = page;


    this.checkBoxofTermsAndCondition = page.locator('#termsofservice');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' })

    this.shipToSameAddress = page.getByLabel("Ship to the Same Address");
    this.firstNameField = page.getByRole('textbox', { name: 'First name:' });
    this.lastNameField = page.getByRole('textbox', { name: 'Last name:' });
    this.emailField = page.getByRole('textbox', { name: 'Email:' });
    this.companyField = page.getByRole('textbox', { name: 'Company:' });
    //this.countryDropdown = page.locator('select[name="country"]');
    this.countryDropdown = page.locator('#BillingNewAddress_CountryId');
    this.stateDropdown = page.locator('#BillingNewAddress_StateProvinceId');
    this.cityField = page.getByRole('textbox', { name: 'City:' });
    this.address1Field = page.getByRole('textbox', { name: 'Address 1:' });
    this.address2Field = page.getByRole('textbox', { name: 'Address 2:' });
    this.zipField = page.getByRole('textbox', { name: 'Zip / postal code:' });
    this.phoneField = page.getByRole('textbox', { name: 'Phone number:' });
    this.faxField = page.getByRole('textbox', { name: 'Fax number:' });

    this.continueBilling = page.locator("(//button[@name='save'])[1]");
    this.shippingMethod = page.getByRole('button', { name: 'Continue' });
    this.paymentMethod = page.getByRole('button', { name: 'Continue' });
    this.paymentInformation = page.locator("//div[@id='payment-info-buttons-container']//button[1]");
    this.confirmOrder = page.getByRole('button', { name: 'Confirm' });
    this.orderSuccessfulMessage = page.getByRole('heading', { name: 'Thank you' });

  }

  async termsAndConditionCheckBox() {
    await this.checkBoxofTermsAndCondition.click();

  }
  async clickCheckoutButton() {
    await this.checkoutButton.click();

  }
  async clickContinueBillingButton() {
    await this.continueBilling.click();
  }
  async clickShippingMethodButton() {
    await this.shippingMethod.click();
  }

  async clickPaymentMethodButton() {
    await this.paymentMethod.click();
  }
  async clickPaymentInformationButton() {
    await this.paymentInformation.click();
  }


  async clickConfirmOrderButton() {
    await this.confirmOrder.click();
  }

  orderExpectedResult(): Locator {
    return this.orderSuccessfulMessage;
  }

  async checkShipToShameAddres(){
     (await this.shipToSameAddress.isChecked()) ? console.log("Ship to the same address is already checked"): (await this.shipToSameAddress.check(),console.log("Ship to the same address is unchecked"))
    }

  async enterFirstName(firstName: string) {
    await this.firstNameField.fill(firstName);
  }

  async enterLastName(lastName: string) {
    await this.lastNameField.fill(lastName);
  }

  async enterEmail(email: string) {
    await this.emailField.fill(email);
  }

  async enterCompany(company: string) {
    await this.companyField.fill(company);
  }

  async selectCountry(country:string) {
    await this.countryDropdown.waitFor({state: 'visible'});
    await this.countryDropdown.selectOption({ label: country });
    await this.page.waitForTimeout(3000);
  }

  async selectState(state:string) {
    await this.stateDropdown.waitFor({state: 'visible'})
    await this.stateDropdown.selectOption({ label: state });
      
     // await expect(this.stateDropdown).toHaveValue(value);
  }

  async enterCity(city: string) {
    await this.cityField.fill(city);
  }

  async enterAddress1(address1: string) {
    await this.address1Field.fill(address1);
  }

  async enterAddress2(address2: string) {
    await this.address2Field.fill(address2);
  }

  async enterZip(zip: string) {
    await this.zipField.fill(zip);
  }

  async enterPhone(phone: string) {
    await this.phoneField.fill(phone);
  }

  async enterFax(fax: string) {
    await this.faxField.fill(fax);
  }
}
