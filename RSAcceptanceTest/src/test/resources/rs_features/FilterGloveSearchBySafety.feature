<<<<<<< HEAD
@wip
Feature: Filter search by brand name
  As a customer
  I want to filter a search
  So that I can group them by brand names

  Scenario: Filter a search by brand name test
    Given I have searched for a product by category "<categoryName>"
    When I filter by brand "<name>"
    Then I should see the "<brand>" in the description
    
=======
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
>>>>>>> c837fa7bd56cc62be224e399d27d1a89cd06c15a
