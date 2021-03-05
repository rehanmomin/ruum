import { Selector, t } from "testcafe";

class LoginPage {
  constructor() {
    this.emailTb = Selector("#user-email");
    this.passwordTb = Selector("#user-password");
    this.homeLink = Selector("div").withExactText("Home");
  }

  /**
   * [login function is used to login inside ruum.app]
   * @param  {[String]} username [username of the user]
   * @param  {[String]} password [password of the user]
   */
  async login(username, password) {
    await t
      .expect(this.emailTb.exists)
      .ok("Login Page is not loaded")
      .typeText(this.emailTb, username)
      .pressKey("enter")
      .typeText(this.passwordTb, password)
      .pressKey("enter")
      .expect(this.homeLink.exists)
      .ok("Login Is not successful");
    console.log("User logged in successfully");
  }
}
export default new LoginPage();
