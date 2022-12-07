const chineseHP = require('../pageobjects/chinese.HP')
describe('Navigate to FamilySearch', () => {
    
        it('Should have all the elements', async () => {
         await browser.url(process.testEnv.rootUrl)
      
          await expect(chineseHP.connectPastNowFuture).toHaveTextContaining('連結您的過去、現在、和未來')
          await expect(chineseHP.familySearchCreateFreeAccount).toHaveTextContaining('FamilySearch 擁有世界上最大的家譜記錄收藏。創建一個免費帳號，就可以查詢珍貴的家譜記錄，並永久保存您的家族歷史。')
          await expect(chineseHP.createFreeAccount).toBeExisting()
          await expect(chineseHP.enterSurnameToSearch).toHaveTextContaining('想找到家譜嗎？輸入姓氏搜索：')
          await expect(chineseHP.understandYourSurname).toHaveTextContaining('您對自己的姓氏了解多少？')
          await expect(chineseHP.createFamilyTree).toHaveTextContaining('創建家譜樹以保存您的家族歷史')
          await expect(chineseHP.savePhotoStory).toHaveTextContaining('為子孫後代永久保留照片和故事')
          await expect(chineseHP.encouragePeopleInTheWorld).toHaveTextContaining('FamilySearch 激勵世界各地的人們與家人保持緊密聯繫―跨越無數世代。')
          await expect(chineseHP.easyToSearch).toHaveTextContaining('家譜搜索就是這麼簡單!')
          await expect(chineseHP.saveFamilyHistory).toHaveTextContaining('通過保存家譜記錄來延續祖先傳承')
        })
      
        it('Click create free account should load to the create account page', async() => {
          await browser.url(process.testEnv.rootUrl)
          await chineseHP.createFreeAccount.click()
          await browser.pause(3000)
          await expect(browser).toHaveUrl(process.testEnv.rootUrl + '/identity/signup/')
        })
      
        it('Surname texbox should be able to enter text and load to the new page', async () => {
          await browser.url(process.testEnv.rootUrl)
          await chineseHP.surnameTextbox.setValue('陳')
          await chineseHP.surnameSearchArrow.click()
          await chineseHP.familySearchLogo.waitForDisplayed({timeout: 3000});
          await expect(chineseHP.familySearchLogo).toBeDisplayed()
        })
      
        it('Traditional click understand surname arrow should load to search surname page', async () => {
          await browser.url(process.testEnv.rootUrl)
          await chineseHP.understandSurnameArrowZh.scrollIntoView({block: "center"})
          await chineseHP.understandSurnameArrowZh.click()
          await browser.pause(3000)
          await browser.switchWindow(process.testEnv.rootUrl + '/zh/chinese/mcs/global/surnames')
          await expect(browser).toHaveUrl(process.testEnv.rootUrl + '/zh/chinese/mcs/global/surnames')
        })
      
        it('Click create family tree arrow should load to family tree page', async () => {
          await browser.url(process.testEnv.rootUrl)
          await chineseHP.createFamilyTreeArrow.click()
          await chineseHP.familySearchLogo.waitForExist({timeout: 3000})
          await expect(chineseHP.familySearchLogo).toBeExisting()
        })
      
        it('Click save memories arrow should load to memory page', async () => {
          await browser.url(process.testEnv.rootUrl)
          await chineseHP.saveMemoriesArrow.click()
          await browser.pause(3000)
          await expect(browser).toHaveUrl(process.testEnv.rootUrl + '/memories/')
        })
      
        it('Click about FamilSearch arrow should load to about FamilySearch page', async () => {
          await browser.url(process.testEnv.rootUrl)
          await chineseHP.aboutFamilySearchArrow.click()
          await browser.pause(3000)
          await expect(browser).toHaveUrl(process.testEnv.rootUrl + '/zh/about/')
        })    
      
        it('Click the arrow under family search is easy should pops up a video', async () => {
          await browser.url(process.testEnv.rootUrl)
          await chineseHP.easyToSearchArrow.click()
          await chineseHP.videoTitle.waitForDisplayed({timeout: 3000})
          await expect(chineseHP.videoTitle).toHaveTextContaining('家譜搜索就是這麼簡單!')
        })
      
        it('Click the arrow under save the family history record should pops up a video', async () => {
          await browser.url(process.testEnv.rootUrl)
          await chineseHP.saveFamilyHistoryArrow.click()
          await chineseHP.videoTitle.waitForDisplayed({timeout: 3000})
          await expect(chineseHP.videoTitle).toHaveTextContaining('通過保存家譜記錄來延續祖先傳承')
        })

        it('Turn on the experiment', async () => {
            await browser.url(process.testEnv.rootUrl + '?listEx')
            await expect(browser).toHaveUrl(process.testEnv.rootUrl + '/zh/?listEx');
            await browser.pause(5000)
            await chineseHP.shared.click()
            await chineseHP.additionalLanguagesSimpChineseEx.click()
            await chineseHP.additionalLanguagesSimpChineseEx.waitForExist({timeout: 5000})
            await chineseHP.additionalLanguagesSimpChineseEx.isSelected()
          })
      
          it('Should have all the elements', async () => {
            await browser.url(process.testEnv.rootUrl + '/zh-hans/')
            await browser.pause(5000)
            await expect(browser).toHaveUrl('https://integration.familysearch.org/zh-hans/')
        
            await expect(chineseHP.connectPastNowFuture).toHaveTextContaining('连接您的过去、现在和未来')
            await expect(chineseHP.familySearchCreateFreeAccount).toHaveTextContaining('FamilySearch 拥有世界上最大的家谱记录收藏。注册一个免费帐户，就可以查询珍贵的家谱记录，并永久保存您的家族历史。')
            await expect(chineseHP.createFreeAccount).toBeExisting({ timeout: 3000 })
            await expect(chineseHP.enterSurnameToSearch).toHaveTextContaining('想寻找家谱吗？输入姓氏搜索：')
            await expect(chineseHP.understandYourSurname).toHaveTextContaining('您对自己的姓氏了解多少？')
            await expect(chineseHP.createFamilyTree).toHaveTextContaining('创建家谱树来保存您的家族历史')
            await expect(chineseHP.savePhotoStory).toHaveTextContaining('为子孙后代永久保留照片和故事')
            await expect(chineseHP.encouragePeopleInTheWorld).toHaveTextContaining('FamilySearch 激励世界各地的人们与家人保持紧密相连―跨越世世代代。')
            await expect(chineseHP.easyToSearch).toHaveTextContaining('家谱搜索就是这么简单!')
            await expect(chineseHP.saveFamilyHistory).toHaveTextContaining('通过保存家谱记录来延续祖先传承')
          })
        
          it('Click create free account should load to the create account page', async() => {
            await browser.url(process.testEnv.rootUrl + '/zh-hans/')
            await chineseHP.createFreeAccount.click()
            await browser.pause(5000)
            await expect(browser).toHaveUrl(process.testEnv.rootUrl + '/identity/signup/')
          })
        
          it('Surname texbox should be able to enter text and load to the new page', async () => {
            await browser.url(process.testEnv.rootUrl + '/zh-hans/')
            await chineseHP.surnameTextbox.setValue('陳')
            await chineseHP.surnameSearchArrow.click()
            await chineseHP.familySearchLogo.waitForExist({timeout: 5000})
            await expect(chineseHP.familySearchLogo).toBeExisting()
          })
        
          it.skip('Simplified click understand surname arrow should load to search surname page', async () => {
            await browser.url(process.testEnv.rootUrl + '/zh-hans/')
            await chineseHP.understandSurnameArrowZhHans.click()
            await browser.pause(3000)
            await browser.switchWindow(process.testEnv.rootUrl + '/zh-hans/chinese/surnames')
            await expect(browser).toHaveUrl(process.testEnv.rootUrl + '/zh-hans/chinese/surnames')
          })
        
          it('Click create family tree arrow should load to family tree page', async () => {
            await browser.url(process.testEnv.rootUrl + '/zh-hans/')
            await chineseHP.createFamilyTreeArrow.click()
            await chineseHP.familySearchLogo.waitForExist({timeout: 5000})
            await expect(chineseHP.familySearchLogo).toBeExisting()
          })
        
          it('Click save memories arrow should load to memory page', async () => {
            await browser.url(process.testEnv.rootUrl + '/zh-hans/')
            await chineseHP.saveMemoriesArrow.click()
            await browser.pause(3000)
            await expect(browser).toHaveUrl(process.testEnv.rootUrl + '/memories/')
          })
        
          it('Click about FamilSearch arrow should load to about FamilySearch page', async () => {
            await browser.url(process.testEnv.rootUrl + '/zh-hans/')
            await chineseHP.aboutFamilySearchArrow.click()
            await browser.pause(3000)
            await expect(browser).toHaveUrl(process.testEnv.rootUrl + '/zh/about/')
          })    
        
          it('Click the arrow under family search is easy should pops up a video', async () => {
            await browser.url(process.testEnv.rootUrl + '/zh-hans/')
            await chineseHP.easyToSearchArrowS.click()
            await chineseHP.videoTitle.waitForExist({timeout: 3000})
            await expect(chineseHP.videoTitle).toHaveTextContaining('家谱搜索就是这么简单!')
          })
        
          it('Click the arrow under save the family history record should pops up a video', async () => {
            await browser.url(process.testEnv.rootUrl + '/zh-hans/')
            await chineseHP.saveFamilyHistoryArrowS.click()
            await chineseHP.videoTitle.waitForExist({timeout: 3000})
            await expect(chineseHP.videoTitle).toBeDisplayed()
          })
      
});
