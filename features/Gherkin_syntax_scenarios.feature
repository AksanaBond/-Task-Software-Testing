Feature:  User Sign in

Scenario: Successful sign in with valid credentials
  Given the user is on the login page
  And the user has a registered account
  When the user enters a valid registered email address and password
  Then the user should be successfully redirected to his account page

Feature:  language change

Scenario: Switch the interface language
  Given the user is on the home page
  When the user switches the interface language to "Deutsch"
  Then the interface of the application should be successfully switched to German
  And the product names and descriptions should remain in English

Feature:  Favorite products

Scenario: Add product to the favorite list
  Given the user is logged into his personal account
  And the user navigates to the details page of a "Bolt Cutters"
  When the user adds product «Bolt Cutters» to his favorites
  Then the product appears in the user’s favorites list

Feature:  Search for an exact product

Scenario: Search for an exact product
  Given the user is on the home page
  When the user searches for the exact product "Claw Hammer" in the search bar
  Then  the search result should display the "Claw Hammer" product card
  And no unrelated product categories should be visible

Feature:  Basket

Scenario: Add a product to the basket
  Given the user is on the home page
  And the user navigates to the product details page "Bolt Cutters"
  When the user adds product "Bolt Cutters" to basket
  Then the basket badge should display an item count of «1»

Feature:  Product categories

Scenario: select the chosen category
  Given the user is on the home page
  When the user selects  "Hand Tools" category from the menu
  Then the product listing should filter to display only the selected category
  And the page header should display "Hand Tools" as an active category

Feature:  Checkout

Scenario: Successful purchase process
  Given the user is logged into his personal account
  And the user has added "Bolt Cutters" product to the basket
  When the user completes the checkout process with valid details
  Then a success message with an invoice number should be displayed on the page

Feature:  Filters & sort products

Scenario: Filtering and sorting products by specific criteria
  Given the user is on the home page
  When the user filters products by a specific brand
  And the user sorts the filtered products by price from low to high
  Then the product list should display only items from the selected brand
  And the first displayed product should be the cheapest one