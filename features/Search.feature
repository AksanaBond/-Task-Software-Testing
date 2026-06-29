Feature: Search for products

Scenario: Search for a product using a general keyword
  Given the user is on the home page
  When the user searches for the product "Claw Hammer"
  Then all returned product cards should contain "Claw Hammer" in their title
  And the search results should display relevant products