const BasePage = require("./base-page")

const SELECTORS = {
  ADMIN_SECTION: '//div[@class="section"]/ul[@class="list-athletes"]',
  MEMBER_SECTION: '//div[@class="section border-top"]/ul[@class="list-athletes"]',
  NEXT_BUTTON: '//li[@class="next_page"]',
  NEXT_BUTTON_DISABLED: '//li[@class="next_page disabled"]',
  PAGINATION_SECTION: '//ul[@class="pagination"]'
}

const MEMBER_PAGE_URL = "https://www.strava.com/clubs/441737/members"

class MembersPage extends BasePage {
  constructor() {
    super(SELECTORS.ADMIN_SECTION)
  }

  get adminSection() {
    return $(SELECTORS.ADMIN_SECTION)
  }

  get memberSection() {
    return $(SELECTORS.MEMBER_SECTION)
  }

  get nextButton() {
    return $(SELECTORS.NEXT_BUTTON)
  }

  get nextButtonDisabled() {
    return $(SELECTORS.NEXT_BUTTON_DISABLED)
  }

  get paginationSection() {
    return $(SELECTORS.PAGINATION_SECTION)
  }

  get membersPageURL() {
    return MEMBER_PAGE_URL
  }

  /**
   * Get all admins from admin section and add to existed members list
   * @param {array} membersList 
   * 
   * @return {membersList}
   */
  getListAdmins(membersList) {
    membersList = this.getMembers(membersList, this.adminSection)
    return membersList
  }

  /**
   * Get all members from member section and add to existed members list
   * @param {*} membersList 
   * 
   * @return {membersList}
   */
  getListMembers(membersList) {
    for (let i = 1; i < (this.paginationSection.$$("li").length - 1); i++) {
      this.paginationSection.$$("li")[i].click()
      this.waitForIsShown()
      membersList = this.getMembers(membersList, this.memberSection)
    }
    return membersList
  }

  /**
   * Get members from admin/member selector and add to existed members list
   * @param {array} membersList 
   * @param {string} selector 
   * 
   * @return {membersList}
   * 
   * @private
   */
  getMembers(membersList, selector) {
    for (let i = 0; i < selector.$$("li").length; i++) {
      let memberHref = selector.$$("li")[i].$("div").$("a").getAttribute("href")
      let memberName = selector.$$("li")[i].$("div").getAttribute("title")
      membersList.push({
        name: memberName,
        href: memberHref
      })
    }
    return membersList
  }

}

module.exports = new MembersPage()