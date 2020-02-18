const BasePage = require('./base-page')

const SELECTORS = {
  GOOGLE_LOGIN_BUTTON: '//a[@class="btn btn-block google-button"]',
  EMAIL_FIELD: '//input[@id="email"]',
  PASS_FIELD: '//input[@id="password"]',
  LOGIN_BUTTON: '//button[@id="login-button"]'
}

const LOGIN_PAGE_URL = 'https://www.strava.com/login'

class LoginPage extends BasePage {
  constructor() {
    super(SELECTORS.GOOGLE_LOGIN_BUTTON)
  }

  get googleLoginButton() {
    return $(SELECTORS.GOOGLE_LOGIN_BUTTON)
  }

  get emailField() {
    return $(SELECTORS.EMAIL_FIELD)
  }

  get passField() {
    return $(SELECTORS.PASS_FIELD)
  }

  get loginButton() {
    return $(SELECTORS.LOGIN_BUTTON)
  }

  get loginPageURL() {
    return LOGIN_PAGE_URL
  }
}

module.exports = new LoginPage()