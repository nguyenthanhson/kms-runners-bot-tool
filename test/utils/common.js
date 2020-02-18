const LoginPage = require('../pages/login-page')
const GoogleLoginPage = require('../pages/google-login-page')
const DEFAULT_TIMEOUT = require('../constants').DEFAULT_TIMEOUT
const GOOGLE_ACCOUNT = require('../constants').GOOGLE_ACCOUNT
const GOOGLE_PASSWORD = require('../constants').GOOGLE_PASSWORD
const STRAVA_ACCOUNT = require('../constants').STRAVA_ACCOUNT
const STRAVA_PASSWORD = require('../constants').STRAVA_PASSWORD

class CommonUtils {

  /**
   * Signin Strava using Goolge SSO
   */
  signinStravaGoogleSSO() {
    browser.url(LoginPage.loginPageURL)
    LoginPage.waitForIsShown()
    LoginPage.googleLoginButton.click()

    GoogleLoginPage.waitForIsShown()
    GoogleLoginPage.emailField.setValue(GOOGLE_ACCOUNT)
    GoogleLoginPage.emailNextButton.click()

    GoogleLoginPage.passField.waitForDisplayed(DEFAULT_TIMEOUT)
    GoogleLoginPage.passField.setValue(GOOGLE_PASSWORD)
    GoogleLoginPage.passNextButton.click()
  }

  /**
   * Signin Strava using email and password
   */
  signinStrava() {
    browser.url(LoginPage.loginPageURL)
    LoginPage.waitForIsShown()
    LoginPage.emailField.setValue(STRAVA_ACCOUNT)
    LoginPage.passField.setValue(STRAVA_PASSWORD)
    LoginPage.loginButton.click()
  }
}

module.exports = new CommonUtils()