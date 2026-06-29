Feature:  Checkout

Scenario: Successful purchase process
  Given the user is logged into his personal account
  And the user has added "Bolt Cutters" product to the basket
  When the user completes the checkout process with valid details
  Then a success message should be displayed on the page