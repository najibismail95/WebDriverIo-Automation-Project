import { When, Then } from '@wdio/cucumber-framework';
import { PimPage } from '../pages/OrangeHRM/pim.page';

const pimPage = new PimPage();

When(/^I navigate to the "PIM" module$/, async () => {
    await pimPage.openPimModule();
});

When(/^I click the "Add" button$/, async () => {
    await pimPage.clickAdd();
});

When(/^I enter the following employee details$/, async (dataTable) => {
    // dataTable.hashes() converts the table to an array of objects:
    // [{ FirstName: 'John', LastName: 'Doe' }]
    const data = dataTable.hashes()[0];
    await pimPage.enterEmployeeDetails(data.FirstName, data.LastName);
});

When(/^I save the new employee$/, async () => {
    await pimPage.saveEmployee();
});

Then(/^I should see a success message$/, async () => {
    await pimPage.verifySuccessMessage();
});

Then(/^I should see "([^"]*)" in the Personal Details header$/, async (name: string) => {
    await pimPage.verifyPersonalDetailsHeader(name);
});

When(/^I search for the employee "([^"]*)"$/, async (name: string) => {
    await pimPage.searchForEmployee(name);
});

Then(/^I should see the employee "([^"]*)" in the search results$/, async (name: string) => {
    await pimPage.verifyEmployeeInSearchResults(name);
});