import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly navigatepage: string;
  readonly useremail: Locator;
  readonly password: Locator;
  readonly registerbutton: Locator;
  readonly loginSuccessLabel: Locator;
  readonly registerherebutton: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly userMobile: Locator;
  readonly Occupation: Locator;
  readonly GenderFemale: Locator;
  readonly Confirmpassword: Locator;
  readonly Oldercheckbox: Locator;
  readonly login: Locator;

  constructor(page: Page) {
    this.navigatepage = 'https://rahulshettyacademy.com/client';
    this.useremail = page.locator('#userEmail');
    this.password = page.locator('#userPassword');
    this.registerbutton = page.getByRole('button', { name: /login|register/i });
    this.loginSuccessLabel = page.locator('text=Login Successfully');
    this.registerherebutton = page.getByRole('link', { name: /register/i });
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.userMobile = page.locator('#userMobile');
    this.Occupation = page.locator("select[formcontrolname='occupation']");
    this.GenderFemale = page.locator("input[type='radio'][value='Female']");
    this.Confirmpassword = page.locator('#confirmPassword');
    this.Oldercheckbox = page.locator("input[type='checkbox']");
    this.login = page.locator("a:has-text('Login'), button:has-text('Login')");
  }
}
