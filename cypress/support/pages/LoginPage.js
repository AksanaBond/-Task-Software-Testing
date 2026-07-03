import BasePage from './BasePage';
class LoginPage extends BasePage {
  elements = {
    emailInput: () => cy.get('[data-test="email"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-submit"]'),
    registerInLink: () => cy.get('[data-test="register-link"]'),
    errorMessage: () => cy.get('[data-test="login-error"]'),
  };

  navigateToLoginPage() {
    this.visit('/');
    this.signInLink.click();
    return this;
  }
  navigateToRegisterPage() {
    this.elements.registerInLink().click();
    return this;
  }
  login(parameter) {
    this.elements.emailInput().clear().type(parameter.email);
    this.elements.passwordInput().clear().type(parameter.password);
    this.elements.loginButton().click();
    return this;
  }
  verifyOnLoginPage() {
    cy.url().should('include', '/auth/login');
    return this;
  }
}

export default new LoginPage();
