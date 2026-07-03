Feature:  User Sign in

Scenario: Successful sign in with valid credentials
  Given the user is on the login page
  And the user has a registered account
  When the user logs in with valid credentials
  Then the user should be redirected to their account page

Feature:  language change

Scenario: Switch the interface language
  Given the user is on the home page
  When the user switches the interface language to "Deutsch"
  Then the application interface should be displayed in German
  And the product names and descriptions should remain in English

Feature:  Favorite products

Scenario: Add a product to the favorite list
  Given the user is logged into his personal account
  And the user navigates to the details page of a "Bolt Cutters"
  When the user adds product "Bolt Cutters" to his favorites
  Then the product appears in the user’s favorites list

Feature: Search for products

Scenario: Search for a product using a general keyword
  Given the user is on the home page
  When the user searches for the product "Claw Hammer"
  Then all returned product cards should contain "Claw Hammer" in their title
  And the search results should display relevant products

Feature:  Basket

Scenario: Add a product to the basket
  Given the user is on the home page
  And the user navigates to the product details page "Bolt Cutters"
  When the user adds product "Bolt Cutters" to basket
  Then the basket badge should display an item count of "1"

Feature:  Product categories

Scenario: select the chosen category
  Given the user is on the home page
  When the user selects  "Hand Tools" category from the menu
  Then the product list is updated to show only filtered items
  And the "Hammer" category filter is marked as selected

Feature:  Checkout

Scenario: Successful purchase process
  Given the user is logged into his personal account
  And the user has added "Bolt Cutters" product to the basket
  When the user completes the checkout process with valid details
  Then a success message should be displayed on the page

Feature:  Filters & sort products

Scenario: Filtering and sorting products by specific criteria
  Given the user is on the home page
  When the user filters products by the brand "ForgeFlex Tools"
  And the user sorts the filtered products by price from low to high
  Then the product list should display only items from the selected brand
  And the first displayed product should be the cheapest one