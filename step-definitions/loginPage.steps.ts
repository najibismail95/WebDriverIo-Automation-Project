import { Given, When, Then } from '@wdio/cucumber-framework';
import { LoginPage } from '../pages/OrangeHRM/login.page';

const loginPage = new LoginPage();

//Main Page
Given(/^I am on the Login Page$/, async () => {
    await loginPage.openLogInPage();
});

When(/^I login with username and password$/, async () => {
    // Safe debugging: Log whether the credentials exist in CI and their length
    console.log('--- CI DEBUGGING ---');
    console.log(`APP_USERNAME exists: ${!!process.env.APP_USERNAME}, length: ${process.env.APP_USERNAME?.length || 0}`);
    console.log(`APP_PASSWORD exists: ${!!process.env.APP_PASSWORD}, length: ${process.env.APP_PASSWORD?.length || 0}`);
    console.log('--------------------');

    await loginPage.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username: string, password: string) => {
    await loginPage.login(username, password);
});

Then(/^I should see an error message indicating invalid login$/, async () => {
    await loginPage.assertLoginErrorMessage();
});