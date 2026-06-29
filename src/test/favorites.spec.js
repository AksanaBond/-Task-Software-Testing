import homePage from '../po/pages/home.page';

import {
  And_the_user_navigates_to_the_product_details,
  Given_user_logged_in,
  When_the_user_adds_product_to_favorites,
  Then_the_product_appears_in_the_favorites_list,
} from '../steps/steps';

describe('Favorite products', () => {
  it('Add product to the favorite list successfully', async () => {
    await Given_user_logged_in();

    await homePage.navbarComponent.homeLink.click();
    await And_the_user_navigates_to_the_product_details('Bolt Cutters');
    await When_the_user_adds_product_to_favorites();
    await Then_the_product_appears_in_the_favorites_list();
  });
});
