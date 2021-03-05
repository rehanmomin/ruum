import { Selector, t } from "testcafe";

class LandingPage {
  constructor() {
    this.loginBtn = Selector("a").withExactText("Log In");
  }

  //write functions which need to performed on landing Page
  async workManagementTab() {
    //write code for workManagementTab
  }

  async ProcessAutomation() {
    //write code for ProcessAutomation
  }
}
export default new LandingPage();
