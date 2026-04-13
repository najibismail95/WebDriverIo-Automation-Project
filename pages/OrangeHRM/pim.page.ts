import BasePage from "../base.page";

export class PimPage extends BasePage {

    private addButton = 'button=Add';
    private firstNameInput = 'input[name="firstName"]';
    private lastNameInput = 'input[name="lastName"]';
    private saveButton = 'button[type="submit"]';
    private successMessage = '.oxd-toast-content--success';
    private openPim = 'a[href*="viewPimModule"]';
    
    // Search selectors
    // OrangeHRM forms are complex; we find the label, go up to the container, then find the input in the sibling container
    private employeeNameInput = '.oxd-input-group'; 
    private searchButton = 'button[type="submit"]';
    private personalDetailsHeader = 'div.orangehrm-edit-employee-name > h6';


    /**
     * Navigates to the PIM module via the side menu.
     */
    async openPimModule(): Promise<void> {
        await $(this.openPim).click();
    }

    /**
     * Clicks the "Add" button to create a new employee.
     */
    async clickAdd(): Promise<void> {
        await $(this.addButton).click();
    }

    /**
     * Fills out the Add Employee form.
     * @param firstName - The first name of the employee to be added
     * @param lastName - The last name of the employee to be added
     */
    async enterEmployeeDetails(firstName: string, lastName: string): Promise<void> {
        await $(this.firstNameInput).setValue(firstName);
        await $(this.lastNameInput).setValue(lastName);
    }

    async saveEmployee(): Promise<void> {
        await $(this.saveButton).click();
    }
    
    async verifySuccessMessage(): Promise<void> {
        const message = await $(this.successMessage);
        await message.waitForDisplayed();
        await expect(message).toBeDisplayed();
    }
    
    async verifyPersonalDetailsHeader(name: string): Promise<void> {
        // The header usually appears as "FirstName LastName"
        await expect($(this.personalDetailsHeader)).toHaveText(name);
    }

    async searchForEmployee(name: string): Promise<void> {
        const inputs = $$(this.employeeNameInput);
        // Select the first input group (index 0) and find the input field within it
        await inputs[0].$('input').setValue(name);
        await $(this.searchButton).click();
    }
    
    async verifyEmployeeInSearchResults(name: string): Promise<void> {
        await expect($(`div=${name}`)).toBeDisplayed();
    }
}