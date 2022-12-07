class ChineseHP{
  get connectPastNowFuture () {
    return $('h3[class*="h3Css"]') 
  }

  get familySearchCreateFreeAccount () {
    return $('h4[class*="subtitle1Css"]')
  }

  get createFreeAccount () {
    return $('a[href="/register"]')
  }

  get enterSurnameToSearch () {
    return $('[style*="jiapuSearchCard"] h6')
  }

  get understandYourSurname () {
    return $('[style*="yellow20"] h6')
  }
  get createFamilyTree () {
    return $('[style*="green10"] h6')
  }
  get savePhotoStory() {
    return $('[style*="red05"] h6')
  }
  get encouragePeopleInTheWorld() {
    return $('[style*="gray03"] h5')
  }

  get easyToSearch() {
    return $('[style*="green30"] h6')
  }

  get saveFamilyHistory() {
    return $('[style*="blue20"] h6')
  }

  get surnameTextbox() {
    return $('[class*="childrenCss"] input')
  }

  get surnameSearchArrow() {
    return $('a[href*="/records/images/search-results"]')
  }

  get familySearchLogo() {
    return $('a[class="logo"]')
  }

  get understandSurnameArrowZh() {
    return $('[aria-label="姓氏探源"]')
  }

  get understandSurnameArrowZhHans() {
    return $$('[href="/zh-hans/chinese/mcs/global/surnames"]')[0]
  }

  get createFamilyTreeArrow() {
    return $('div[class*="cellCss_cs2s3nb"] a[href="/tree/pedigree"]')
  }

  get saveMemoriesArrow() {
    return $('a[href="/memories"]')
  }

  get aboutFamilySearchArrow() {
    return $('[href="/zh/about"]')
  }

  get easyToSearchArrow() {
    return $('button[aria-label="觀看視頻了解家譜搜索"]')
  }

  get easyToSearchArrowS() {
    return $('button[aria-label="观看视频了解家谱搜索"]')
  }

  get videoTitle() {
    return $('div[class*="draggableCss"] h1')
  }

  get saveFamilyHistoryArrow() {
    return $('button[aria-label="觀看視頻了解家譜記錄保存"]')
  }

  get saveFamilyHistoryArrowS() {
    return $('button[aria-label="观看视频了解家谱记录保存"]')
  }

  get shared () {
    return browser.$$('button[class*="MuiTab-textColorInherit"]')[1]
  }
  get additionalLanguagesSimpChineseEx () {
    return $('div[class*="containerCss"] input[name="additionalLanguagesSimpChineseEx"]')
}

}

module.exports = new ChineseHP();