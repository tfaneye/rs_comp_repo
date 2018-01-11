@regression
Feature: Filter search by Glove Material
As a customer
I want to filter asearch
So that I can group items into glove material category

Scenario Outline: Filter a search by glove material test
    Given I have searched for an item by category "<categoryName>"
    When I filter by Glove Material "<name>"
    Then I should see the "<gloveMaterial>" in Glove Material column
    Examples: Test data
    |categoryName|name|gloveMaterial|
    |Reusable gloves|Acrylic|Acrylic|
