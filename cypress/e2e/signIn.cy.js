import { REGISTER_CREDENTIALS } from '../support/credentials';
import RegisterPage from '../support/pages/RegisterPage';
import LoginPage from '../support/pages/LoginPage';
describe('User Sign in', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Successful sign in with valid credentials', () => {
    cy.log('Given the user is on the login page');
    LoginPage.navigateToLoginPage();
    LoginPage.verifyOnLoginPage();
    cy.log('And the user has a registered account');
    LoginPage.navigateToRegisterPage();
    RegisterPage.registerUser(REGISTER_CREDENTIALS);
    cy.log('When the user logs in with valid credentials');
    LoginPage.login(REGISTER_CREDENTIALS);
    cy.log('Then the user should be redirected to their account page');
    cy.url().should('include', '/account');
  });
});
