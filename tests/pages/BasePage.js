import { Page, Locator } from '@playwright/test';

export class BasePage {
  constructor(page) {
    this.page = page;
    this.languageDropdown = page.locator('[data-test="language"]');
    this.basketIcon = page.locator('[data-test="nav-cart"]');
    this.basketBadge = page.locator('[data-test="cart-quantity"]');
  }

  async navigate(path) {
    await this.page.goto(path);
  }

  async selectLanguage(language) {
    await this.languageDropdown.click();
    await this.page
      .locator(`[data-test="lang-${language.toLowerCase()}"]`)
      .click();
    await this.waitForPageLoad();
  }

  async getBasketCount() {
    return (await this.basketBadge.textContent()) || '0';
  }
}
