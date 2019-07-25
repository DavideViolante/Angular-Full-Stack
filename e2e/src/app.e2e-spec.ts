import { browser, logging } from 'protractor';
import { Angular2FullStackPage } from './app.po';

describe('angular2-full-stack App', () => {
  let page: Angular2FullStackPage;

  beforeEach(() => {
    page = new Angular2FullStackPage();
  });

  it('should display the expanded navbar for high resolutions', () => {
    browser.manage().window().setSize(1024, 768);
    page.navigateTo();
    expect(page.getNavbarElement(0)).toEqual('Home');
    expect(page.getNavbarElement(1)).toEqual('Cats');
    expect(page.getNavbarElement(2)).toEqual('Login');
    expect(page.getNavbarElement(3)).toEqual('Register');
    expect(page.getNavbarButton()).toBeFalsy();
  });

  it('should display the collapsed navbar for low resolutions', () => {
    browser.manage().window().setSize(640, 480);
    page.navigateTo();
    expect(page.getNavbarButton()).toEqual('');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
