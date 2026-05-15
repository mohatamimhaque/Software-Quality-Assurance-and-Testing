import { Page, Locator } from "playwright/test";


export default class LoginPage {
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailField = page.getByLabel('Email:');
        this.passwordField = page.getByLabel('Password:');
        this.loginButton = page.getByRole('button', {name: 'Log in'});

    }

    async enterEmail(email: string){
        await this.emailField.fill(email);

    }

    async enterPassword(password: string){
        await this.passwordField.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }




}