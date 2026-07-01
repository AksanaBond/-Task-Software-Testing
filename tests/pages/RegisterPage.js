import { expect, Page } from '@playwright/test';

import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator('[data-test="email"]');
    this.firstNameInput = page.locator('[data-test="first-name"]');
    this.lastNameInput = page.locator('[data-test="last-name"]');
    this.dateOfBirthInput = page.locator('[data-test="dob"]');
    this.countryInput = page.locator('[data-test="country"]');
    this.postalCodeInput = page.locator('[data-test="postal_code"]');
    this.houseNumberInput = page.locator('[data-test="house_number"]');
    this.streetInput = page.locator('[data-test="street"]');
    this.cityInput = page.locator('[data-test="city"]');
    this.stateInput = page.locator('[data-test="state"]');
    this.phoneInput = page.locator('[data-test="phone"]');
    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.registerButton = page.locator('[data-test="register-submit"]');
  }
  async registerUser(register) {
    await this.firstNameInput.fill(register.firstName);
    await this.lastNameInput.fill(register.lastName);
    await this.dateOfBirthInput.fill(register.dateOfBirth);
    await this.countryInput.selectOption(register.country);
    await this.postalCodeInput.fill(register.postalcode);
    await this.houseNumberInput.fill(`${register.housenumber}`);
    await this.streetInput.fill(register.street);
    await this.cityInput.fill(register.city);
    await this.stateInput.fill(register.state);
    await this.phoneInput.fill(`${register.phone}`);
    await this.emailInput.fill(register.email);
    await this.passwordInput.fill(register.password);
    await this.registerButton.click();
    await this.page.waitForURL('**/auth/login', {
      waitUntil: 'domcontentloaded',
    });
  }
}
