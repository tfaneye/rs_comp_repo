@regression
Feature: Filter search by brand name
  As a customer
  I want to filter a search
  So that I can group them by brand names

  Scenario Outline: Filter a search by brand name test
    Given I a have searched for a particular product by category "<categoryName>"
    When I filter by glove size "<gloveSize>"
    Then I should see the "<size>" in the Glove Size section
    Examples: Test data
      |categoryName|gloveSize|size|
      |Reusable gloves|One Size|One Size|