import { Given, When, Then } from '@wdio/cucumber-framework';
import { LoginPage } from '../pages/OrangeHRM/login.page';

const loginPage = new LoginPage();

//Main Page
Given(/^I am on the Login Page$/, async () => {
    await loginPage.openLogInPage();
});

When(/^I login with username and password$/, async () => {
    await loginPage.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username: string, password: string) => {
    await loginPage.login(username, password);
});

Then(/^I should see an error message indicating invalid login$/, async () => {
    await loginPage.assertLoginErrorMessage();
});