/// <reference types = "cypress" />

import {LoginPage} from "../Pages/login"

const loginpage = new LoginPage();

it('first test',function(){
    loginpage.launchUrl('https://foobar.testing.cluedin-test.online/signin')
    loginpage.enterUsername('prashu.9974@gmail.')
    loginpage.enterPassword('Prashu@123')
    loginpage.checkErrorMessage()  
})

it('second test',function(){
    loginpage.launchUrl('https://foobar.testing.cluedin-test.online/signin')
    loginpage.enterUsername('prashu.9974@gmail.com')
    loginpage.enterPassword('Prashu@123')
    loginpage.clickSiginInButton()

})


