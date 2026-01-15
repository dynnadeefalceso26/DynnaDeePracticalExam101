import { Page } from "@playwright/test";
import { LoginPage } from "../PageObject/Login.PageObject";                  
import { Dashboard } from "../PageObject/Dashboard.PageObject";  

 
export class PageManager {
  private page: Page;
  private loginpagelocators: LoginPage;
  private dashboardlocators: Dashboard;

 
 
  constructor(page: Page) {
    this.page = page;
    this.loginpagelocators = new LoginPage(this.page);
    this.dashboardlocators = new Dashboard(this.page);
  };
 
 
  Loginpagelocators() {
    return this.loginpagelocators;
  }
  Dashboardlocators() {
    return this.dashboardlocators;
  }

};