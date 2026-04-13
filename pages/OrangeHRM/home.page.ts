import BasePage from "../base.page";

export class HomePage extends BasePage {


    private homePageIdentifier = 'div.oxd-topbar-header-title';
    private searchInput = 'input[placeholder="Search"]';
    private userDropdown = '.oxd-userdropdown-tab';

    /**
     * Asserts that the user is currently on the Home Page (Dashboard).
     * Checks the URL and the visibility of the header title.
     */
    async assertIsOnHomepage(): Promise<void> {
        await expect(browser).toHaveUrl(/dashboard/i);
        await expect($(this.homePageIdentifier)).toBeDisplayed();
    }

    /**
     * Verifies that the specified dashboard widgets are displayed on the page.
     * @param widgets - A list of widget names to verify
     */
    async verifyDashboardWidgets(...widgets: string[]): Promise<void> {
        const selectors = widgets.map(widget => `p*=${widget}`);
        await this.verifyElementsDisplayed(selectors);
    }

    /**
     * Clicks on a specific item within the Quick Launch widget
     * @param itemName - The visible text of the shortcut (e.g., "Assign Leave")
     */
    async clickQuickLaunchItem(itemName: string): Promise<void> {
        const button = $(`button[title="${itemName}"]`);
        await button.waitForClickable();
        await button.click();
    }

    /**
     * Searches for a specific item in the side navigation menu.
     * @param menuItem - The name of the menu item to search for
     */
    async searchSideMenu(menuItem: string): Promise<void> {
        await $(this.searchInput).setValue(menuItem);
    }

    /**
     * Opens the user dropdown menu (top right).
     */
    async openUserDropdown(): Promise<void> {
        await $(this.userDropdown).click();
    }

    /**
     * Clicks an option inside the user dropdown menu.
     * @param option - The visible text of the option (e.g., "Logout")
     */
    async selectUserDropdownOption(option: string): Promise<void> {
        const optionElement = $(`a=${option}`);
        await optionElement.click();
    }

    /**
     * Verifies that a specific item is visible in the side menu.
     * @param menuItem - The name of the menu item
     */
    async verifySideMenuItem(menuItem: string): Promise<void> {
        await this.verifyElementsDisplayed([`span=${menuItem}`]);
    }
}