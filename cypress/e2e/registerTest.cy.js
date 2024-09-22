import { registerPage } from "./tests/registerPage"
const registerObj = new registerPage()
import registerData from '../fixtures/registerData.json'
describe('test automation',()=>{

    it('register flow',()=>{
        
         registerObj.openURL()
         registerObj.enterFirstName(registerData.firstName)
         registerObj.enterLastName(registerData.lastName)
         registerObj.enterEmail(registerData.email)
         registerObj.entertelephome(registerData.telephone)
         registerObj.enterPassword(registerData.password)
         registerObj.enterFirstName(registerData.firstName)
         registerObj.selectCheckbox()
         registerObj.clickOnContinue()

    })
})