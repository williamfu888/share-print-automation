const header = require('../pageobjects/header')
const chineseHP = require('../pageobjects/chinese.HP')

describe('Landing page headers', () => {

  describe('Traditional', () => {

    it('click on Family Search icon should refresh the page', async () => {
      await browser.setWindowSize(740, 516)
      await browser.url(process.testEnv.rootUrl)
      await browser.pause(2000)
      await header.familySearchImage.click()
      await expect(browser).toHaveUrl('https://beta.familysearch.org/zh/')
    })
  
    it('click on language button should pops up the language menu', async () => {
      await browser.pause(2000)
      await header.selectLanguage.click()
      await expect(header.changeLanguage).toHaveTextContaining('變更語言')
      await header.languageCloseButton.click()
    })
  
    it('click on help button should pops up the help menu', async () => {
      await header.help.click()
      await browser.pause(2000)
      await expect(header.helpMenu).toHaveTextContaining('協助')
      await header.helpCloseButton.click()
    })
  
    it('click on the menu button should pops up log in and create account options', async () => {
      await header.menu.click()
      await header.logInButton.waitForExist(3000)
      await expect(header.logInButton).toBeExisting()
      await expect(header.createAccountButton).toBeExisting()
      await header.menuCloseButton.click()
    })
  
    it('click on family tree should has a drop down list (window width > 1200)', async () => {
      await browser.setWindowSize(1280, 780)
      await browser.refresh()
      await browser.pause(5000)
      await header.familyTreeButton.click({setTimeout: 2000})
      await expect(header.familyTreeOverview).toHaveTextContaining('概覽')
    })
  
    it('click on search should has a drop down list', async () => {
      await header.searchButton.click()
      await expect(header.record).toHaveTextContaining('紀錄')
    })
  
    it('click on search should has a drop down list', async () => {
      await header.memoriesButton.click()
      await expect(header.memoryOverview).toHaveTextContaining('概覽')
    })
  
    it('click on search should has a drop down list', async () => {
      await header.getInvolvedButton.click()
      await expect(header.getInvolvedOverview).toHaveTextContaining('概覽')
    })
  
    it('click on search should has a drop down list', async () => {
      await header.activitiesButton.click()
      await expect(header.allActivities).toHaveTextContaining('所有的活動')
    })
  
    it('click on log in button should go to log in page', async () => {
      await header.logInButton.click()
      await expect(header.logInInfo).toHaveTextContaining('登入')
    })
  
    it('click on create account button should go to create account page', async () => {
      await browser.url(process.testEnv.rootUrl)
      await header.createAccountButton.click()
      await browser.pause(5000)
      await expect(browser).toHaveUrl('https://beta.familysearch.org/register/custom/1')
      await expect(header.createFreeAccount).toHaveTextContaining('建立免費帳號')
  
    })

  }),

  describe('Simpliflied', () => {

    it('turn on the experiment', async () => {
      await browser.setWindowSize(740, 516)
      await browser.refresh()
      await browser.url(process.testEnv.rootUrl + '?listEx')
      await expect(browser).toHaveUrl(process.testEnv.rootUrl + '/zh/?listEx');
      await browser.pause(5000)
      await chineseHP.shared.click()
      await chineseHP.additionalLanguagesSimpChineseEx.click()
      await chineseHP.additionalLanguagesSimpChineseEx.isSelected({setTimeout: 5000})
    })


    it('click on Family Search icon should refresh the page', async () => {
      await browser.url(process.testEnv.rootUrl + '/zh-hans/')
      await browser.pause(2000)
      await header.familySearchImage.click()
      await expect(browser).toHaveUrl('https://beta.familysearch.org/zh-hans/')
    })
  
    it('click on language button should pops up the language menu', async () => {
      await header.selectLanguage.click()
      await browser.pause(5000)
      await expect(header.changeLanguage).toHaveTextContaining('变更语言')
      await header.languageCloseButton.click()
    })
  
    it('click on help button should pops up the help menu', async () => {
      await browser.pause(2000)
      await header.help.click()
      await expect(header.helpMenu).toHaveTextContaining('协助')
      await header.helpCloseButton.click()
    })
  
    it('click on the menu button should pops up log in and create account options', async () => {
      await header.menu.click()
      await expect(header.logInButton).toBeExisting()
      await expect(header.createAccountButton).toBeExisting()
      await header.menuCloseButton.click()
  
    })
  
    it('click on family tree should has a drop down list (window width > 1200)', async () => {
      // set the window's width
      await browser.setWindowSize(1280, 780)
      await browser.refresh()
      await browser.pause(5000)
      await header.familyTreeButton.click()
      await expect(header.familyTreeOverview).toHaveTextContaining('概览')
  
    })
  
    it('click on search should has a drop down list', async () => {
      await header.searchButton.click()
      await expect(header.record).toHaveTextContaining('纪录')
    })
  
    it('click on search should has a drop down list', async () => {
      await header.memoriesButton.click()
      await expect(header.memoryOverview).toHaveTextContaining('概览')
    })
  
    it('click on search should has a drop down list', async () => {
      await header.getInvolvedButton.click()
      await expect(header.getInvolvedOverview).toHaveTextContaining('概览')
    })
  
    it('click on search should has a drop down list', async () => {
      await header.activitiesButton.click()
      await expect(header.allActivities).toHaveTextContaining('所有的活动')
    })
  
    it('click on log in button should go to log in page', async () => {
      await header.logInButton.click()
      await expect(header.logInInfo).toHaveTextContaining('登录 FamilySearch')
    })
  
    it('click on create account button should go to create account page', async () => {
      await browser.url(process.testEnv.rootUrl + '/zh-hans/')
  
      await header.createAccountButton.click()
      await expect(browser).toHaveUrl('https://beta.familysearch.org/register/custom/1')
      await expect(header.createFreeAccount).toHaveTextContaining('建立免费帐号')
  
    })

  })
    
  
});


