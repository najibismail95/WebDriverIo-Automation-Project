import BasePage from '../base.page.js'

export class LoginPage extends BasePage {

    private usernameField = 'input[name="username"]';
    private passwordField = 'input[name="password"]';
    private loginBtn = 'button[type="submit"]';
    private loginErrorMessage = 'div.oxd-alert-content';
   
    async openLogInPage(): Promise<void> {
        return this.navigateToUrl('/');  
    }

    async login(username: string, password: string): Promise<void> {
        await $(this.usernameField).waitForDisplayed();
        await $(this.usernameField).setValue(username);
        await $(this.passwordField).setValue(password);
        await $(this.loginBtn).click();
    }

    async assertLoginErrorMessage(): Promise<void> { 
        await expect($(this.loginErrorMessage)).toBeDisplayed(); 
    }

   
}