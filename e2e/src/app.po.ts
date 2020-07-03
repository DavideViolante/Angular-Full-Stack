import { $$, browser } from 'protractor';

export class Angular2FullStackPage {
  navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getNavbarElement(n): Promise<string> {
    return $$('app-root a').get(n).getText() as Promise<string>;
  }

  getNavbarButton(): Promise<string> {
    return $$('app-root button').get(0).getText() as Promise<string>;
  }

}
