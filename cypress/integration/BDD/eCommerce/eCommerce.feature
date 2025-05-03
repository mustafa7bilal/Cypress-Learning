Feature: Place order on Ecommerce site

  Scenario: Successfully place an order
    Given I open the ecommerce site
    When I fill the user details and submit the form
    And I add two products to cart
    And I checkout and confirm the purchase
    Then The order should be placed successfully
