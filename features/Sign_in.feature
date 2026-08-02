@smoke
Feature:  User Sign in

Scenario: Successful sign in with valid credentials
  Given the user is on the login page
  And the user has a registered account
  When the user logs in with valid credentials
  Then the user should be redirected to their account page
