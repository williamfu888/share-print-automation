const quotes = require('../pageobjects/quotes')
const chineseHP = require('../pageobjects/chinese.HP')


describe('Chinese landing page quotes', () => {

  describe('Traditional', () => {
    it('should have Zhou Deming quote', async () => {
      await browser.url(process.testEnv.rootUrl)
      await browser.pause(2000)
      await (quotes.liKangqiQuote).scrollIntoView({block: "center"})
      await expect(quotes.zhouDemingQuote).toHaveTextContaining('上海圖書館與FamilySearch的交往源於上世紀末，雙方在中國家譜收集、整理、研究和服務方面的合作持續了20多年。家譜是記載同宗共祖血緣集團世系、人物和事蹟等方面的歷史圖籍，它是人類文化遺產的一個重要組成部分，具有尋根問祖、學術研究和教化懲戒等功效。這同FamilySearch對家譜的認知十分吻合。')
      await expect(quotes.zhouDemingName).toHaveTextContaining('周德明')
      await expect(quotes.zhouDemingTitle).toHaveTextContaining('上海圖書館副館長')
    })
  
    it('should have Li Kanqi quote', async () => {
      await expect(quotes.liKangqiQuote).toHaveTextContaining('FamilySearch團隊去年為新加坡族譜學會舉辦了在線研討會，介紹了FamilySearch軟件及其廣泛的數據庫。他們在聊天組中的積極參與支持了許多Genealogy Society Singapore成員追溯他們祖先的根源，展現了優秀團隊的熱情和專業精神。')
      await expect(quotes.liKangqiName).toHaveTextContaining('李康琪')
      await expect(quotes.liKangqiTitle).toHaveTextContaining('新加坡族譜學會項目開發總監')
    })
  
    it('should have Zhang Peipei quote', async () => {
      await expect(quotes.zhangPeipeiQuote).toHaveTextContaining('我的家譜樹往上只做到4個世代，我知道大陸旁系親戚有一本很厚的族譜，父親已過世，我不認識大陸的親戚，也沒有聯絡的資料。2020年10月中旬看到FamilySearch有新的搜尋功能，於是我用編輯祖先字輩的經驗先去找字輩，找到後再循線尋找父親、祖父、曾祖父的名字，我有一種像在尋寶的感覺。沒想到家族龐大，相同字輩的資料就有好幾冊，只好耐心一頁一頁地查找，找了兩天，終於讓我找著了，心中喜悅難以形容，這真是無價之寶。')
      await expect(quotes.zhangPeipeiName).toHaveTextContaining('張沛沛')
      await expect(quotes.zhangPeipeiTitle).toHaveTextContaining('臺灣FamilySearch用戶')
    })
  }),

  describe('Simplified', () => {

    it('turn on the experiment', async () => {
      await browser.setWindowSize(1118, 780)
      await browser.url(process.testEnv.rootUrl + '?listEx')
      await expect(browser).toHaveUrl(process.testEnv.rootUrl + '/zh/?listEx');
      await browser.pause(2000)
      await chineseHP.shared.click()
      await chineseHP.additionalLanguagesSimpChineseEx.click()
      await chineseHP.additionalLanguagesSimpChineseEx.isSelected()
      await browser.pause(2000)
    })

    it('should have Zhou Deming quote', async () => {
      await browser.url(process.testEnv.rootUrl + '/zh-hans/')
      await browser.pause(2000)
      await (quotes.liKangqiQuote).scrollIntoView({block: "center"})
      await expect(quotes.zhouDemingQuote).toHaveTextContaining('上海图书馆与FamilySearch的交往源于上世纪末，双方在中国家谱收集、整理、研究和服务方面的合作持续了20多年。家谱是记载同宗共祖血缘集团世系、人物和事迹等方面的历史图籍，它是人类文化遗产的一个重要组成部分，具有寻根问祖、学术研究和教化惩戒等功效。这同FamilySearch对家谱的认知十分吻合。')
      await expect(quotes.zhouDemingName).toHaveTextContaining('周德明')
      await expect(quotes.zhouDemingTitle).toHaveTextContaining('上海图书馆副馆长')
    })
  
    it('should have Li Kanqi quote', async () => {
      await expect(quotes.liKangqiQuote).toHaveTextContaining('FamilySearch团队去年为新加坡族谱学会举办了在线研讨会，介绍了FamilySearch软件及其广泛的数据库。他们在聊天组中的积极参与支持了许多Genealogy Society Singapore成员追溯他们祖先的根源，展现了优秀团队的热情和专业精神。')
      await expect(quotes.liKangqiName).toHaveTextContaining('李康琪')
      await expect(quotes.liKangqiTitle).toHaveTextContaining('新加坡族谱学会项目开发总监')
    })
  
    it('should have Zhang Peipei quote', async () => {
      await expect(quotes.zhangPeipeiQuote).toHaveTextContaining('我的家谱树往上只做到4个世代，我知道大陆旁系亲戚有一本很厚的族谱，父亲已过世，我不认识大陆的亲戚，也没有联络的资料。 2020年10月中旬看到FamilySearch有新的搜寻功能，于是我用编辑祖先字辈的经验先去找字辈，找到后再循线寻找父亲、祖父、曾祖父的名字，我有一种像在寻宝的感觉。没想到家族庞大，相同字辈的资料就有好几册，只好耐心一页一页地查找，找了两天，终于让我找着了，心中喜悦难以形容，这真是无价之宝。')
      await expect(quotes.zhangPeipeiName).toHaveTextContaining('张沛沛')
      await expect(quotes.zhangPeipeiTitle).toHaveTextContaining('台湾FamilySearch用户')
    })
  })
  

});