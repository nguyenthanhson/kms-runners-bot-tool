const BasePage = require('./base-page')

const SELECTORS = {
  EMAIL_FIELD: '//*[@id="identifierId"]',
  EMAIL_NEXT_BUTTON: '//*[@id="identifierNext"]',
  PASS_FIELD: '//*[@name="password"]',
  PASS_NEXT_BUTTON: '//*[@id="passwordNext"]'
}

class GoogleLoginPage extends BasePage {
  constructor() {
    super(SELECTORS.EMAIL_FIELD)
  }

  get emailField() {
    return $(SELECTORS.EMAIL_FIELD)
  }

  get emailNextButton() {
    return $(SELECTORS.EMAIL_NEXT_BUTTON)
  }

  get passField() {
    return $(SELECTORS.PASS_FIELD)
  }

  get passNextButton() {
    return $(SELECTORS.PASS_NEXT_BUTTON)
  }
}

module.exports = new GoogleLoginPage()