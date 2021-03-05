import { Selector, t } from "testcafe";

class SignupPage {
  constructor() {
    this.loginBtn = Selector('a[href="https://open.ruumapp.com"]').nth(2);
    this.signupLink = Selector("span").withExactText("Sign up");
    this.emailTb = Selector("#user-email");
    this.firstNameTb = Selector("#first-name");
    this.lastNameTb = Selector("#last-name");
    this.passwordTb = Selector("#user-passowrd");
    this.companySizeDd = Selector("#selectedCompanySize");
    this.selectedCompanyRoleDd = Selector("#selectedCompanyRole");
    this.selectedCompanyFunction = Selector("#selectedCompanyFunction");
    this.privacyStatementCb = Selector("#privacy-statement");
    this.termsAndConditionsCb = Selector("#tou");
    this.marketingMailsCb = Selector("#marketing-mails");
    this.blockedDomainCb = Selector("#blocked-domain");
    this.createAccountbtn = Selector('button[type="button"]').nth(0);
    this.closeIcon = Selector(".icon.icon-cancel");
    this.templateTxt = Selector("h2").withExactText(
      " Welcome to your Template Library, rehan! "
    );
    this.homeLink = Selector("div").withExactText("Home");
  }

  /**
   * [Signup function is used to Signup for ruum.app]
   * @param  {[String]} email [email id of the user]
   * @param  {[String]} firstname [firstname of the user]
   * @param  {[String]} lastname [lastname of the user]
   * @param  {[String]} password [password of the user]
   */
  async signup(email, firstname, lastname, password) {
    console.log("User email is : " + email);
    await t
      .click(this.loginBtn)
      .click(this.signupLink)
      .expect(this.emailTb.exists)
      .ok("Sign up Page loaded")
      .typeText(this.emailTb, email)
      .typeText(this.firstNameTb, firstname)
      .typeText(this.lastNameTb, lastname)
      .typeText(this.passwordTb, password)
      .click(this.companySizeDd)
      .pressKey("down enter")
      .click(this.selectedCompanyRoleDd)
      .pressKey("down enter")
      .click(this.selectedCompanyFunction)
      .pressKey("down enter")
      .click(this.privacyStatementCb)
      .click(this.termsAndConditionsCb)
      .click(this.marketingMailsCb)
      .click(this.blockedDomainCb)
      .click(this.createAccountbtn)
      .expect(this.closeIcon.exists)
      .ok("User signup is not successful")
      .click(this.closeIcon);

    console.log("user signup successful");
  }
}
export default new SignupPage();
