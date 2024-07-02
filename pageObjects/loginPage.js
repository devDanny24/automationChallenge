class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = 'input[id="element-0"]';
      this.passwordInput = 'input[id="element-3"]';
      this.submitButton = 'button[type="submit"]';
    }
  
    async visit() {
      await this.page.goto('https://todoist.com/users/showlogin');
      await this.page.waitForLoadState("networkidle")
    }
  
    async fillEmail(email) {
      await this.page.fill(this.emailInput, email);
    }
  
    async fillPassword(password) {
      await this.page.fill(this.passwordInput, password);
    }
  
    async submit() {
      await this.page.click(this.submitButton);
      await this.page.waitForLoadState("networkidle")
    }
  }
  
module.exports = LoginPage;