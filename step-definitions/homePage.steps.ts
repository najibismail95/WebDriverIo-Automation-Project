import { Given, When, Then } from '@wdio/cucumber-framework';
import { HomePage } from '../pages/OrangeHRM/home.page';

const homePage = new HomePage();

//Home Page
Then(/^I should see the OrangeHRM home page$/, async () => {
   await homePage.assertIsOnHomepage();
});

When(/^I scroll through the Dashboard$/, async () => {
    // I will leave this empty for now, as scrolling is not always necessary to view the widgets.
    // The main verification will be done in the next step.
});

Then(/^I should see the following widgets$/, async (dataTable) => {
    const widgets = dataTable.raw().map((row: string[]) => row[0]);
    await homePage.verifyDashboardWidgets(...widgets);
});

When(/^I click on "([^"]*)" in the Quick Launch widget$/, async (shortcut) => {
    await homePage.clickQuickLaunchItem(shortcut);
});

Then(/^I should be redirected to the "([^"]*)" page$/, async (pageUrlPart) => {
    await homePage.verifyUrlContains(pageUrlPart);
});

When(/^I search for "([^"]*)" in the side menu$/, async (menuItem) => {
    await homePage.searchSideMenu(menuItem);
});

Then(/^I should see the "([^"]*)" menu item$/, async (menuItem) => {
    await homePage.verifySideMenuItem(menuItem);
});

When(/^I click on the user profile picture$/, async () => {
    await homePage.openUserDropdown();
});

When(/^I select "([^"]*)" from the dropdown$/, async (option) => {
    await homePage.selectUserDropdownOption(option);
});