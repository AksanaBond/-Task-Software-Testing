import homePage from '../po/pages/home.page';
import productDetailsPage from '../po/pages/product.details.page';
import { expect as chaiExpect } from 'chai';

describe('Basket Feature', () => {
  it('should add a product to the basket successfully', async () => {
    await homePage.open(); // Given  the user is on the home page
    await homePage.openProductDetails('Bolt Cutters'); // And the user navigates to the product details page "Bolt Cutters"
    await productDetailsPage.productDetailsComponent.productName.waitForDisplayed();
    await productDetailsPage.addProductToCart(); //  When the user adds product "Bolt Cutters" to basket
    const badge = productDetailsPage.navbarcomponent.cartBadge;
    await badge.waitForDisplayed();
    const textBadge = await badge.getText();
    //await expect(badge).toHaveText('1');// Then the basket badge should display an item count of «1»
    chaiExpect(textBadge).to.equal('1');
  });
});
