Feature:  Product categories

Scenario: select the chosen category
  Given the user is on the home page
  When the user selects  "Hand Tools" category from the menu
  Then the product list is updated to show only filtered items
  And the "Hammer" category filter is marked as selected
