const header = require('../pageobjects/header')
const chineseHP = require('../pageobjects/chinese.HP')


describe('Landing page headers', () => {
  describe('Traditional', () => {
    it('icons should be existing when window width < 1200', async () => {
      await browser.setWindowSize(740, 516)
      await browser.url(process.testEnv.rootUrl)
      await browser.pause(500)
      await expect(header.familySearchImage).toBeExisting()
      await expect(header.selectLanguage).toBeExisting()
      await expect(header.help).toBeExisting()
      await expect(header.menu).toBeExisting()
    });
  
    it('icons should be clickable when width', async () => {
      await expect(header.familySearchImage).toBeClickable()
      await expect(header.selectLanguage).toBeClickable()
      await expect(header.help).toBeClickable()
      await expect(header.menu).toBeClickable()
    })
  
    // It won't pass on sauce lab because of the window size
    it('icons should be existing when window width > 1200', async () => {
      // set the window's width
      await browser.setWindowSize(1280, 780)
  
      await expect(header.familySearchImage).toBeExisting()
      await expect(header.familyTreeButton).toHaveTextContaining('家譜樹')
      await expect(header.searchButton).toHaveTextContaining('搜尋')
      await expect(header.memoriesButton).toHaveTextContaining('回憶')
      await expect(header.getInvolvedButton).toHaveTextContaining('一起參與')
      await expect(header.activitiesButton).toHaveTextContaining('活動')
  
      await expect(header.selectLanguage).toBeExisting()
      await expect(header.help).toBeExisting()
      await expect(header.logInButton).toHaveTextContaining('登入')
      await expect(header.createAccountButton).toHaveTextContaining('建立帳號')
    })
  
    it('icons should be clickable', async () => {
      await expect(header.familySearchImage).toBeClickable()
      await expect(header.familyTreeButton).toBeClickable()
      await expect(header.searchButton).toBeClickable()
      await expect(header.memoriesButton).toBeClickable()
      await expect(header.getInvolvedButton).toBeClickable()
      await expect(header.activitiesButton).toBeClickable()
  
      await expect(header.selectLanguage).toBeClickable()
      await expect(header.help).toBeClickable()
      await expect(header.logInButton).toBeClickable()
      await expect(header.createAccountButton).toBeClickable()
    })
  }),
  
  describe('Simplified', () => {

    it('turn on the experiment', async () => {
      await browser.url(process.testEnv.rootUrl + '?listEx')
      await expect(browser).toHaveUrl(process.testEnv.rootUrl + '/zh/?listEx');
      await browser.pause(5000)
      await chineseHP.shared.click()
      await chineseHP.additionalLanguagesSimpChineseEx.click()
      await chineseHP.additionalLanguagesSimpChineseEx.isSelected({setTimeout: 5000})
    })

    it('icons should be existing when window width < 1200', async () => {
      await browser.setWindowSize(740, 516)
      await browser.url(process.testEnv.rootUrl + '/zh-hans/')
      await browser.pause(500)
      await expect(header.familySearchImage).toBeExisting()
      await expect(header.selectLanguage).toBeExisting()
      await expect(header.help).toBeExisting()
      await expect(header.menu).toBeExisting()
    });
  
    it('icons should be clickable when width', async () => {
      await expect(header.familySearchImage).toBeClickable()
      await expect(header.selectLanguage).toBeClickable()
      await expect(header.help).toBeClickable()
      await expect(header.menu).toBeClickable()
    })
  
    // It won't pass on sauce lab because of the window size
    it('icons should be existing when window width > 1200', async () => {
      // set the window's width
      await browser.setWindowSize(1280, 780)
  
      await expect(header.familySearchImage).toBeExisting()
      await expect(header.familyTreeButton).toHaveTextContaining('家谱树')
      await expect(header.searchButton).toHaveTextContaining('搜寻')
      await expect(header.memoriesButton).toHaveTextContaining('回忆')
      await expect(header.getInvolvedButton).toHaveTextContaining('一起参与')
      await expect(header.activitiesButton).toHaveTextContaining('活动')
  
      await expect(header.selectLanguage).toBeExisting()
      await expect(header.help).toBeExisting()
      await expect(header.logInButton).toHaveTextContaining('登入')
      await expect(header.createAccountButton).toHaveTextContaining('免费帐号')
    })
  
    it('icons should be clickable', async () => {
      await expect(header.familySearchImage).toBeClickable()
      await expect(header.familyTreeButton).toBeClickable()
      await expect(header.searchButton).toBeClickable()
      await expect(header.memoriesButton).toBeClickable()
      await expect(header.getInvolvedButton).toBeClickable()
      await expect(header.activitiesButton).toBeClickable()
  
      await expect(header.selectLanguage).toBeClickable()
      await expect(header.help).toBeClickable()
      await expect(header.logInButton).toBeClickable()
      await expect(header.createAccountButton).toBeClickable()
    })
  })
  

    
});


