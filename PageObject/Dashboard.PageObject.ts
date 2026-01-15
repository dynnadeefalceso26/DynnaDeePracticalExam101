import { Locator, Page } from '@playwright/test';
 
export class Dashboard {
    readonly page: Page;
    readonly searchbar: Locator;
    readonly EnterButton: Locator;
    readonly cartButton: Locator;
    readonly productAddedtoCartLabel: Locator;
    readonly productNameOnCard: Locator;
    readonly checkoutButton: Locator;
    readonly dashboardCartButton: Locator;
    readonly monthDropdown: Locator;
    readonly dayDropdown: Locator;
    readonly CvvField: Locator;
    readonly nameField: Locator;
    readonly countryField: Locator;
    readonly SelectCountryOption: Locator;
    readonly placeOrderButton: Locator;
    readonly orderPlacedLabel: Locator;
    readonly orderSuccessMessage: Locator;
    readonly downloadOrderDetailsButton: Locator;
    readonly logoArea: Locator;
    readonly productNameValidation: Locator;
    readonly inStockValidation: Locator;
    readonly CheckoutbuttonValidation: Locator;
   
   
 
   constructor(page: Page) {
    this.page = page;
    this.searchbar = page.getByRole('textbox', { name: 'search' });
    this.EnterButton = page.getByRole('textbox', { name: 'search' });
    this.cartButton = page.locator('.btn.w-10.rounded');
    this.productAddedtoCartLabel = page.getByLabel('Product Added To Cart');
    this.productNameOnCard = page.locator('.card-body b');
    this.dashboardCartButton = page.locator("button[routerlink='/dashboard/cart']");
    this.checkoutButton = page.locator("//button[normalize-space()='Checkout']");
    this.monthDropdown = page.locator('.input.input.ddl').first();
    this.dayDropdown = page.locator('.input.input.ddl').nth(1);
    this.CvvField = page.locator('input.input.txt').nth(1);
    this.nameField = page.locator('input.input.txt').nth(2);
    this.countryField = page.getByPlaceholder('Select Country');
    this.SelectCountryOption = page.locator('.ta-item.list-group-item');
    this.placeOrderButton = page.locator('.btnn.action__submit.ng-star-inserted');
    this.orderPlacedLabel = page.getByLabel('Order Placed Successfully');
    this.orderSuccessMessage = page.locator('.hero-primary');
    this.downloadOrderDetailsButton = page.locator('.btn.btn-primary.mt-3.mb-3');
 
    //Assertion
   
    this.logoArea = page.getByRole('heading', { level: 3, name: 'Automation' })
    this.productNameValidation = page.locator('.cartSection h3');
    this.inStockValidation = page.locator('.cartSection .stockStatus');
    this.CheckoutbuttonValidation = page.getByRole('button', { name: 'Checkout' });
   
  }
}
