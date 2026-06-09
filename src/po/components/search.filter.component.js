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
    return $(`//label[contains(text(), ${parameter})]/input`);
  }
}
export default SearchFilterComponent;
