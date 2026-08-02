Feature:  language change

Scenario: Switch the interface language
  Given the user is on the home page
  And the user navigates to the product details 'Bolt Cutters'
  When the user switches the interface language to "Deutsch"
  Then the application interface should be displayed in German
  And the product names and descriptions should remain in English