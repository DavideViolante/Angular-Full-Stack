import { Angular2FullStackPage } from './app.po';

describe('angular2-full-stack App', () => {
  let page: Angular2FullStackPage;

  beforeEach(() => {
    page = new Angular2FullStackPage();
  });

  it('should display navbar with Home and About', () => {
    page.navigateTo();
    expect(page.getNavbarHome()).toEqual('Home');
    expect(page.getNavbarAbout()).toEqual('About');
  });
});
