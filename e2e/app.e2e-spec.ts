import { BuylistPage } from './app.po';

describe('buylist App', () => {
  let page: BuylistPage;

  beforeEach(() => {
    page = new BuylistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
