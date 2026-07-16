import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountPage extends BasePage {
  constructor(page) {
    super(page);
    this.title = page.locator('[data-test="page-title"]');
    this.favoritesLink = page.locator('[data-test="nav-favorites"]');
    this.profileLink = page.locator('[data-test="nav-profile"]');
    this.invoicesLink = page.locator('[data-test="nav-invoices"]');
    this.messagesLink = page.locator('[data-test="nav-messages"]');
  }
  async verifyAccountPageDisplayed() {
    await this.title.waitFor({ state: 'visible', timeout: 5000 });
  }
}
