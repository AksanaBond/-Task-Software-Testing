import HomePage from '../support/pages/HomePage';

describe('Feature: Language Change', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  it('Switch the interface language', () => {
    cy.log('Given the user is on the home page');
    HomePage.navigateToHomePage();
    const originalProductNames = [];
    HomePage.getProductNames()
      .each(($el) => {
        originalProductNames.push($el.text().trim());
      })
      .then(() => {
        cy.log('When the user switches the interface language to "Deutsch"');
        HomePage.changeLanguage('DE');
        cy.log('Then the application interface should be displayed in German');
        HomePage.verifyLanguageChanged();
        cy.log('And the product names and descriptions should remain in English');
        HomePage.getProductNames().each(($el, index) => {
          expect($el.text().trim()).to.equal(originalProductNames[index]);
        });
      });
  });
});
