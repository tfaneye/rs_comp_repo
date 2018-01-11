@wip
Feature: Filter search by brand name
  As a customer
  I want to filter a search
  So that I can group them by brand names

  Scenario: Filter a search by brand name test
    Given I have searched for a product by category "<categoryName>"
    When I filter by brand "<name>"
    Then I should see the "<brand>" in the description
    