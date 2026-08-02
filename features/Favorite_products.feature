@favorite
Feature:  Favorite products

Scenario: Add a product to the favorite list
  Given the user is logged into his personal account
  And the user navigates to the product details "Bolt Cutters"
  When the user adds product "Bolt Cutters" to his favorites
  Then the product appears in the user’s favorites list