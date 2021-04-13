Feature: Test

Scenario: test1 

Given As a user if I enter a wrong email address
Then I should see a red border in the input


Scenario: test2

Given As user without a valid account
When I enter a valid email address and a valid password and click on Sign In button
Then I should see an error message
