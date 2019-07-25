import { $$, browser } from 'protractor';

export class Angular2FullStackPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getNavbarElement(n) {
    return $$('app-root a').get(n).getText() as Promise<string>;
  }

  getNavbarButton() {
    return $$('app-root button').get(0).getText() as Promise<string>;
  }

}
