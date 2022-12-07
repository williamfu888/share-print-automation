const loginService = new (require('qa-shared-loginService/lib/loginService.js'))(process.testEnv)
const cookieUtils = require('qa-shared-base/lib/extensions/cookieUtils.js')
let fetch = require("node-fetch");
let surname = '';
let firstName = '';

module.exports = {

  //sign in to familysearch as a test user. Can specify user type
  login: async function(loginType){
    if (!loginType) {
      loginType = 'PUBLIC'
    }
    await browser.url(process.testEnv.rootUrl)
    const user = await loginService.getLoggedInUserFromTestDataAPI({
      lockUser: true,
      accountType: loginType
    })

    await cookieUtils.setSession(user.fsSessionId)
    await browser.refresh()
    return user
  },

  //sign out from familysearch session
  signOut: async function() {
    let testEnv = process.testEnv;
    await browser.get(testEnv.rootUrl + 'auth/logout');
  },

  //generate a first and last name of the given gender in the given locale
  populateNames: async function(gender, localeCode){
    let URL = "https://integration.familysearch.org/service/util/test-data/data/name?gender=" + gender + "&locale=" + localeCode;
    await fetch(URL) 
    .then(async function (resp) {
      let respBody = await resp.json()
      //currently uses the first name form, which is the most common in each language. Languages with non-Latin characters may have multiple name forms
      surname = respBody.nameForms[0].parts[1].value;
      firstName = respBody.nameForms[0].parts[0].value;
    }) 
    .catch(async function(error){     
      console.log(error); 
    })
  },

  //generate a place name in a given locale
  getPlace: async function(localeCode){
    let URL = "https://integration.familysearch.org/service/util/test-data/data/place?locale=" + localeCode;
    result = await fetch(URL)
    .then(async function (resp) {
      return await resp.text();
    }) 
    .catch(async function(error){     
      console.log(error); 
      return "";
    })
    //some place names have parentheses, which are not allowed in some search forms
    return result.replace(/[\(\)]/g, "");
  },

  getFirstName: async function(gender, localeCode){
    if (firstName == ''){
      await this.populateNames(gender, localeCode);
    }
    return firstName;
  },

  getLastName: async function(gender, localeCode){
    if (surname == ''){
      await this.populateNames(gender, localeCode);
    }
    return surname;
  }

}
