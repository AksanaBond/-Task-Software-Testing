Feature:  Filters & sort products

Scenario: Filtering and sorting products by specific criteria
  Given the user is on the home page
  When the user filters products by the brand "ForgeFlex Tools"
  And the user sorts the filtered products by price from low to high
  Then the product list should display only items from the selected brand
  And the first displayed product should be the cheapest one