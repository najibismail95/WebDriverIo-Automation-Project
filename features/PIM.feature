@PIM
Feature: Personnel Information Management

  Background: User logs in
    Given I am on the Login Page
    When I login with username and password
    Then I should see the OrangeHRM home page

  Scenario: Add a new employee
    When I navigate to the "PIM" module
    And I click the "Add" button
    And I enter the following employee details
      | FirstName | LastName |
      | John      | Doe      |
    And I save the new employee
    Then I should see a success message
    And I should see "John Doe" in the Personal Details header

  Scenario: Search for an employee
    When I navigate to the "PIM" module
    And I search for the employee "John Doe"
    Then I should see the employee "John Doe" in the search results