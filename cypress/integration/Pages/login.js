export class LoginPage{

    userName = ':nth-child(1) > [style="margin-bottom: 16px;"] > .sc-hmzhuo > .sc-frDJqD'
    passWord = ':nth-child(2) > [style="margin-bottom: 16px;"] > .sc-hmzhuo > .sc-frDJqD'
    errorIcon = '.uxi_svg-icon-wrapper'
    signInButton = '.sc-dnqmqq'
    errorMessage='Sorry'

    launchUrl(url){
         cy.visit(url)
    }
    enterUsername(email){
         cy.get(this.userName).type(email)
    }
    enterPassword(password){
         cy.get(this.passWord).type(password)
    }
    checkErrorMessage(){
         cy.get(this.errorIcon).should('be.visible')
    }
    clickSiginInButton(){
          cy.on('uncaught:exception', (err, runnable) => {
          return false;
          });
          cy.get(this.signInButton).click()
    }
    validateErrorMessage(){
          cy.contains('Sorry').should('be.visible')
    }
}