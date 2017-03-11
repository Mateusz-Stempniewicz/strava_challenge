import { StravachallengefrontendPage } from './app.po';

describe('stravachallengefrontend App', () => {
  let page: StravachallengefrontendPage;

  beforeEach(() => {
    page = new StravachallengefrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
