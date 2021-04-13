/// <reference types = "cypress" />
import {Given, And, Then , When} from "cypress-cucumber-preprocessor/steps";
import {LoginPage} from '../Pages/login';

const loginpage = new LoginPage();


Given('As a user if I enter a wrong email address',function(){
    loginpage.launchUrl('https://foobar.testing.cluedin-test.online/signin')
    loginpage.enterUsername('prashu.9974@gmail.')
    loginpage.enterPassword('Prashu@123')
    
})
Then('I should see a red border in the input',function(){
    loginpage.checkErrorMessage() 
})

Given('As user without a valid account', function(){
    loginpage.launchUrl('https://foobar.testing.cluedin-test.online/signin')
    
})

When('I enter a valid email address and a valid password and click on Sign In button', function(){
    loginpage.enterUsername('prashu.9974@gmail.com')
    loginpage.enterPassword('Prashu@123')
    loginpage.clickSiginInButton()
})

Then('I should see an error message', function(){
    loginpage.validateErrorMessage()
})