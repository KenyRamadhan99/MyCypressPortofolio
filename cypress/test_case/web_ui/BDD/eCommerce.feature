Feature: End To End  eCommerce Validation


    Ecommerce End To End Testing
@Regression
    Scenario: Ecommerce Product 
    Given I Open Ecommerce Page
    When I Add Items To Cart
    And I Validate The Total Price
    Then Select The Country Submit And Verify Thank You

 @Smoke
    Scenario: Filling the form to shop
    Given I Open Ecommerce Page
    When I fill the form details
    |name | gender |
    |bobz | Male   |
    Then validate the forms behaviour
    And select the Shop Page

