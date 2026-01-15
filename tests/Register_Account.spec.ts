import { test, expect } from '@playwright/test';
import { PageManager } from '../PageManager/PageManager';
 
test('Register', async ({ page }) => {
 
const { faker } = await import('@faker-js/faker');
const pageManager=new PageManager(page);
const registerPage = pageManager.Loginpagelocators();
const firstnameInput = faker.person.firstName();
const lastNameInput = faker.person.lastName();
const userEmailInput = faker.internet.email({
  firstName: firstnameInput,
  lastName:  lastNameInput,
});
const phone = faker.number.int({ min: 9000000000, max: 9999999999 }).toString();
const passWord= 'SecretPassword123'
 
  await page.goto(registerPage.navigatepage);
  await registerPage.registerherebutton.click();
 
  //First name
  await registerPage.firstName.fill(firstnameInput);
  await expect (registerPage.firstName).toHaveValue(firstnameInput);
  console.log(firstnameInput);
 
  //Last name
  await registerPage.lastName.fill(lastNameInput);
  await expect (registerPage.lastName).toHaveValue(lastNameInput);
  console.log(lastNameInput);
 
  //Email
  await registerPage.useremail.fill(userEmailInput);
  await expect (registerPage.useremail).toHaveValue(userEmailInput);
  console.log(userEmailInput);
 
  //Phone Number
  await registerPage.userMobile.fill(phone);
  console.log(phone);
  await registerPage.Occupation.selectOption('3: Engineer');
 
  //Gender
  await registerPage.GenderFemale.check();
 
  //Password
  await registerPage.password.fill(passWord);
  console.log(passWord);
 
  //Confirm Password
  await registerPage.Confirmpassword.fill(passWord);
  console.log('Confirm Password - ',(passWord));
  await registerPage.Oldercheckbox.check();
 
  //Register button
  await registerPage.registerbutton.click();
  console.log("Register Successfully");
 
  //Login
  await registerPage.login.click();
 
});
