@regression
Feature: Searching for an item byRS Stock Number using Quick Order search
  As a customer
  I want to search for an item using RS Stock Number only
  So that I can add item to basket

  Scenario: Search for an item by stock number test
    Given I am on the default page of the application
    When I search for an item by RS stock "912-0239" and "1" and click on Add to Basket button
    Then I should be able to see details of the item searched "FLIR E4 Thermal Imaging Camera, Temp Range: -20 → +250 °C 80 x 60pixel RS Cal" in the basket