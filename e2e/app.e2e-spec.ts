import { Angular2FullStackPage } from './app.po';

describe('angular2-full-stack App', function() {
  let page: Angular2FullStackPage;

  beforeEach(() => {
    page = new Angular2FullStackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
