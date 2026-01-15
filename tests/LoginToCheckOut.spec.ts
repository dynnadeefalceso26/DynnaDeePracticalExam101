import {test,expect} from '@playwright/test';
import { PageManager } from '../PageManager/PageManager';
 
 
test('Login To Checkout',async({page})=>{
 
  const pageManager = new PageManager(page);
  const loginPage = pageManager.Loginpagelocators();
  const orderDashboard = pageManager.Dashboardlocators();
 
  const emailInput = 'deeemail@gmail.com';
  const passwordInput = 'SecretPassword123';
  const name = 'Sample Name';
 
 
await page.goto(loginPage.navigatepage);
await loginPage.useremail.fill(emailInput);
await loginPage.password.fill(passwordInput);
await loginPage.registerbutton.click();
await expect(loginPage.loginSuccessLabel).toBeVisible();
await expect(page).toHaveURL(/.*client/); // URL contains /client
await expect (orderDashboard.logoArea).toBeVisible();
console.log('Login successful and dashboard loaded correctly');
console.log('Dashboard header "Automation" is visible');
 
//Add to cart
const firstProductName = (await orderDashboard.productNameOnCard.first().textContent())?.trim();
expect(firstProductName).toBeTruthy();
await expect(orderDashboard.cartButton.first()).toContainText('Add To Cart');
await expect(orderDashboard.cartButton.first()).toBeVisible();
await orderDashboard.cartButton.first().click();
console.log('Product Successfully Added');
 
//View cart
await expect (orderDashboard.dashboardCartButton).toBeVisible();
await expect (orderDashboard.dashboardCartButton).toBeEnabled();
await orderDashboard.dashboardCartButton.click();
 
//Checkout
await expect(orderDashboard.productNameValidation).toHaveText(firstProductName as string);
await expect (orderDashboard.inStockValidation).toHaveText('In Stock');
await expect(orderDashboard.CheckoutbuttonValidation).toBeVisible();
await expect(orderDashboard.CheckoutbuttonValidation).toBeEnabled();
await expect (orderDashboard.CheckoutbuttonValidation).toHaveText('Checkout');
await orderDashboard.checkoutButton.click();
 
//Place Order
await expect(orderDashboard.monthDropdown).toBeVisible();
await orderDashboard.monthDropdown.selectOption('09');
await expect(orderDashboard.dayDropdown).toBeVisible();
await orderDashboard.dayDropdown.selectOption('27');
await expect(orderDashboard.CvvField).toBeVisible();
await orderDashboard.CvvField.fill('123456');
await orderDashboard.nameField.fill(name);
await orderDashboard.countryField.pressSequentially('Ph');
await orderDashboard.SelectCountryOption.filter({ hasText: 'Philippines' }).click();
await orderDashboard.placeOrderButton.click();
console.log('Place Order Successfully')
 
//Order Details
await expect(orderDashboard.orderPlacedLabel).toBeVisible();
await expect(orderDashboard.orderSuccessMessage).toHaveText('Thankyou for the order.');
await orderDashboard.downloadOrderDetailsButton.click();
console.log('Download Successfully');
 
});

