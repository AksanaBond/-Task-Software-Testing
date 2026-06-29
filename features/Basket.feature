Feature:  Basket

Scenario: Add a product to the basket
  Given the user is on the home page
  And the user navigates to the product details page "Bolt Cutters"
  When the user adds product "Bolt Cutters" to basket
  Then the basket badge should display an item count of "1"