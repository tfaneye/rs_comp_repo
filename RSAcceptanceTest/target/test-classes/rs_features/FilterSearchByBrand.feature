@regression
Feature: Filter search by brand name
  As a customer
  I want to filter a search
  So that I can group them by brand names

  Scenario Outline: Filter a search by brand name test
    Given I a have searched for a product by category "<categoryName>"
    When I filter by brand "<name>"
    Then I should see the "<brand>" in the description
    Examples: Test data
    |categoryName|name|brand|
    |Reusable gloves|Ansell|Ansell|