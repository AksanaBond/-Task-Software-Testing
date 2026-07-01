import { expect, Page } from '@playwright/test';

import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  constructor(page) {
    super(page);
    this.productTitle = page.locator('[data-test="product-name"]');
    this.productDescription = page.locator('[data-test="product-description"]');
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    this.productPrice = page.locator('[data-test="unit-price"]');
  }

  async navigateToProduct(productName) {
    await this.navigate('/');
    const productLink = this.page
      .locator(`[data-test="product-name"]:has-text("${productName}")`)
      .first();
    await productLink.click();
    await this.page.waitForURL('**/product/**');
  }

  async addToCart() {
    await this.addToCartButton.click();
    await this.toastNotification.waitFor({ state: 'visible', timeout: 5000 });
  }
}
