const DEFAULT_TIMEOUT = require('../constants').DEFAULT_TIMEOUT

class BasePage {
  constructor(selector) {
    this.selector = selector
  }

  /**
   * Wait for the page to be visible
   *
   * @param {boolean} isShown
   * 
   * @return {boolean}
   */
  waitForIsShown(isShown = true) {
    return $(this.selector).waitForDisplayed(DEFAULT_TIMEOUT, !isShown)
  }
}

module.exports = BasePage