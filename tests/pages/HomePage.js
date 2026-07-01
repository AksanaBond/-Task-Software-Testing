import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.productCards = page.locator('.card');
    this.productTitles = page.locator('[data-test="product-name"]');
    this.navbarBrand = page.locator('.navbar-brand');
    this.categoryFilters = page.locator('[data-test="filters"]');
    this.filtersTitle = page.locator('h5:has-text("Filters")');
    this.sortDropdown = page.locator('[data-test="sort"]');
    this.searchInput = page.locator('[data-test="search-query"]');
    this.searchButton = page.locator('[data-test="search-submit"]');
  }
  async searchForProduct(searchTerm) {
    await this.searchInput.fill(searchTerm);
    const responsePromise = this.page.waitForResponse(
      (response) =>
        response.url().includes('search?q=') && response.status() === 200
    );
    await this.searchButton.click();
    await responsePromise;
  }

  async navigateToHomePage() {
    await this.navigate('/');
  }

  async verifyHomePageDisplayed() {
    await expect(this.productCards.first()).toBeVisible({ timeout: 10000 });
  }
  async waitForSearchResults(searchTerm) {
    return this.page
      .locator('.card', { hasText: searchTerm })
      .first()
      .waitFor({ state: 'visible', timeout: 10000 });
  }

  async getProductCardTitles() {
    await this.productTitles.first().waitFor({ state: 'visible' });
    return await this.productTitles.allTextContents();
  }
  async navigateToFirstProduct() {
    await this.productTitles.first().click();
    await this.page.waitForURL('**/product/**');
  }

  async getInterfaceLanguageElements() {
    const filtersText =
      (await this.page.locator('h5').first().textContent()) || '';
    const sortText =
      (await this.sortDropdown.locator('option').first().textContent()) || '';
    return { filtersText, sortText };
  }
}
