const fs = require('fs');

const MembersPage = require('../pages/members-page')
const CommonUtils = require('../utils/common')

describe('Strava - ', () => {
  before(() => {
    browser.maximizeWindow()
    CommonUtils.signinStrava()
  })

  it('get all members in club', () => {
    browser.url(MembersPage.membersPageURL)
    MembersPage.waitForIsShown()

    var membersList = []
    membersList = MembersPage.getListAdmins(membersList)
    membersList = MembersPage.getListMembers(membersList)

    var data = JSON.stringify(membersList)
    fs.writeFileSync('testData.json', data)
  })
})