Feature: Dashboard Page post Login

  Background: User logs in
    Given I am on the Login Page
    When I login with username and password
    Then I should see the OrangeHRM home page

  Scenario: Verify Dashboard Widgets
    When I scroll through the Dashboard
    Then I should see the following widgets
      | Time at Work                      |
      | My Actions                        |
      | Quick Launch                      |
      | Employees on Leave                |
      | Buzz Latest Posts                 |
      | Employee Distribution by Sub Unit |
      | Employee Distribution by Location |

  @quickLaunch
  Scenario Outline: Verify Quick Launch Shortcuts
    When I click on "<Shortcut>" in the Quick Launch widget
    Then I should be redirected to the "<Page>" page

    Examples:
      | Shortcut     | Page                  |
      | Assign Leave | assignLeave           |
      | Leave List   | viewLeaveList         |
      | Timesheets   | viewEmployeeTimesheet |

  @sideMenu
  Scenario: Verify Side Menu Search
    When I search for "Admin" in the side menu
    Then I should see the "Admin" menu item
  
  @logout
  Scenario: Verify Logout functionality
    When I click on the user profile picture
    And I select "Logout" from the dropdown
    Then I should be redirected to the "login" page
