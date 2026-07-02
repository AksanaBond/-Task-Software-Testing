import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-submit"]');
    this.registerInLink = page.locator('[data-test="register-link"]');
    this.errorMessage = page.locator('[data-test="login-error"]');
  }

  async navigateToLoginPage() {
    await this.navigate('/');
    await this.signInLink.click();
    await this.page.waitForURL('**/auth/login');
  }
  async navigateToRegisterPage() {
    await this.registerInLink.click();
    await this.page.waitForURL('**/auth/register');
  }

  async login(parameter) {
    await this.emailInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.emailInput.fill(parameter.email);
    await this.passwordInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.passwordInput.fill(parameter.password);
    await this.loginButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.loginButton.click();
    await this.page.waitForURL('**/account');
  }

  async verifyLoginPageDisplayed() {
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }
}
