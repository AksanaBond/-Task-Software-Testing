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
  getFilterParameter(parameter) {
    return $(`//label[contains(., "${parameter}")]/input`);
  }
  async search(productName) {
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
    await this.getFilterParameter(parameter).click();
  }
  async sortBy(attribute, value) {
    await this.selectSort.selectByAttribute(attribute, value);
  }
  async isCategorySelected(categoryName) {
    return await this.getFilterParameter(categoryName).isSelected();
  }
}
export default SearchFilterComponent;
