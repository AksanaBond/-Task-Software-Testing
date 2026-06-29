import {
  Given_the_user_is_on_the_home_page,
  And_the_user_navigates_to_the_product_details,
  When_the_user_adds_product_to_basket,
  Then_the_basket_badge_should_display_an_item_count,
} from '../steps/steps';

describe('Basket Feature', () => {
  it('should add a product to the basket successfully', async () => {
    await Given_the_user_is_on_the_home_page();
    await And_the_user_navigates_to_the_product_details('Bolt Cutters');
    await When_the_user_adds_product_to_basket();
    await Then_the_basket_badge_should_display_an_item_count();
  });
});
