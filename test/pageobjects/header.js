class Header{
  get familySearchImage () {
    return $('img[alt="FamilySearch"]')
  }

  get familyTreeButton () {
    return browser.$$('button[class*="headerNavButton"]')[0]
  }


  get searchButton () {
    return browser.$$('button[class*="headerNavButton"]')[1]
  }

  get memoriesButton () {
    return browser.$$('button[class*="headerNavButton"]')[2]
  }

  get getInvolvedButton () {
    return browser.$$('button[class*="headerNavButton"]')[3]
  }

  get activitiesButton () {
    return browser.$$('button[class*="headerNavButton"]')[4]
  }

  get selectLanguage () {
    return browser.$$('div[class*="metaStyle"] button')[0]
  }

  get help () {
    return browser.$$('div[class*="metaStyle"] button')[1]
  }

  get menu () {
    return browser.$$('div[class*="metaStyle"] button')[2]
  }

  get logInButton () {
    return $('div[class*="accountStyle"] button')
  }

  get createAccountButton () {
    return $('div[class*="accountStyle"] a')
  }

  get changeLanguage () {
    return $('[class*="headingCss"] h1')
  }

  get languageCloseButton () {
    return $('div[class*="closeButton"] button')
  }

  get helpCloseButton () {
    return $('div[class*="draggableCss"] button')
  }

  get helpMenu () {
    return $('[class*="headerCss"] h6')
  }

  get menuCloseButton () {
    return $('div[class*="closeStyle"] button')
  }

  get familyTreeOverview () {
    return $('a[href="/tree/overview"]')
  }

  get record () {
    return $('a[href="/search/"]')
  }

  get memoryOverview () {
    return $('a[href="/memories/"]')
  }

  get getInvolvedOverview () {
    return $('a[href="/getinvolved/"]')
  }

  get allActivities () {
    return $('a[href="/discovery/"]')
  }

  get logInInfo () {
    return $('[class="sign-in-box"] h2')
  }

  get createFreeAccount () {
    return $('[class*="registration-heading"]')
  }

}


module.exports = new Header();