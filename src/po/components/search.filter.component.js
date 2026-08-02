import BaseComponent from './common/base.component';

class SearchFilterComponent extends BaseComponent {
  constructor() {
    super('#filters');
  }
  get searchInput() {
    return $('[data-test="search-query"]');
  }

  get searchButton() {
    return $('[data-test="search-submit"]');
  }

  get searchResetButton() {
    return $('[data-test="search-reset"]');
  }
  get sortDropdown() {
    return $('[data-test="sort"]');
  }
  async getFilterParameter(parameter) {
    return $(`//label[contains(., "${parameter}")]/input`);
  }
  async search(productName) {
    await this.searchInput.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: 'does not loaded',
    });
    await this.searchInput.setValue(productName);
    await this.searchButton.click();
  }
  get getCardsName() {
    return $$('[data-test="product-name"]');
  }
  get getCardsPrice() {
    return $$('[data-test="product-price"]');
  }
  async selectCategory(parameter) {
    const element = await this.getFilterParameter(parameter);
    await element.click();
  }
  async sortBy(attribute, value) {
    await this.sortDropdown.selectByAttribute(attribute, value);
  }
  async isCategorySelected(categoryName) {
    const element = await this.getFilterParameter(categoryName);
    return await element.isSelected();
  }
}
export default SearchFilterComponent;
