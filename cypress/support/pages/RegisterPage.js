import BasePage from './BasePage';
class RegisterPage extends BasePage {
  elements = {
    firstNameInput: () => cy.get('[data-test="first-name"]'),
    lastNameInput: () => cy.get('[data-test="last-name"]'),
    dateOfBirthInput: () => cy.get('[data-test="dob"]'),
    countryInput: () => cy.get('[data-test="country"]'),
    postalCodeInput: () => cy.get('[data-test="postal_code"]'),
    houseNumberInput: () => cy.get('[data-test="house_number"]'),
    streetInput: () => cy.get('[data-test="street"]'),
    cityInput: () => cy.get('[data-test="city"]'),
    stateInput: () => cy.get('[data-test="state"]'),
    phoneInput: () => cy.get('[data-test="phone"]'),
    emailInput: () => cy.get('[data-test="email"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    registerButton: () => cy.get('[data-test="register-submit"]'),
  };

  registerUser(register) {
    this.elements.firstNameInput().clear().type(register.firstName);
    this.elements.lastNameInput().type(register.lastName);
    this.elements.dateOfBirthInput().type(register.dateOfBirth);
    this.elements.countryInput().select(register.country);
    this.elements.postalCodeInput().type(register.postalcode);
    this.elements.houseNumberInput().type(`${register.housenumber}`);
    this.elements.streetInput().type(register.street);
    this.elements.cityInput().type(register.city);
    this.elements.stateInput().type(register.state);
    this.elements.phoneInput().type(`${register.phone}`);
    this.elements.emailInput().type(register.email);
    this.elements.passwordInput().type(register.password);
    this.elements.registerButton().click();

    cy.url().should('include', '/auth/login');
    return this;
  }
}

export default new RegisterPage();
