import { browser, by, element } from 'protractor';

export class Angular2FullStackPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getNavbarElement(n: number): Promise<string> {
    return element.all(by.css('app-root a.nav-link')).get(n).getText();
  }

  async getNavbarButton(): Promise<string> {
    return element(by.css('app-root button.navbar-toggler')).getText();
  }

}
