class Quotes{
  get zhouDemingQuote() {
    return browser.$$('blockquote[class*="quoteCss"]')[0] 
  }

  get zhouDemingName() {
    return browser.$$('div[class*="textContainerCss"] strong')[0]
  }

  get zhouDemingTitle() {
    return browser.$$('div[class*="textContainerCss"] small')[0]
  }

  get liKangqiQuote() {
    return browser.$$('blockquote[class*="quoteCss"]')[1] 
  }

  get liKangqiName() {
    return browser.$$('div[class*="textContainerCss"] strong')[1]
 }

  get liKangqiTitle() {
    return browser.$$('div[class*="textContainerCss"] small')[1]
  }

  get zhangPeipeiQuote() {
    return browser.$$('blockquote[class*="quoteCss"]')[2] 
  }

  get zhangPeipeiName() {
    return browser.$$('div[class*="textContainerCss"] strong')[2]
  }

  get zhangPeipeiTitle() {
    return browser.$$('div[class*="textContainerCss"] small')[2]
  }
}
                          

module.exports = new Quotes();