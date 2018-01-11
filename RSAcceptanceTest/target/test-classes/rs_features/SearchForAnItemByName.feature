@regression
Feature: Searching for an item by name
  As a customer
  I want to search for an item by name
  So that I acn add them to basket

  Scenario: Search for an item test
    Given I am on the home page of the application
    When I search for an item by name
    |name|
    |RS Pro 125 mm Chrome Molybdenum Steel Circlip Pliers|
    Then I should be able to see the Item price
    |price|
    | £11.01    |
