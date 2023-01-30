/// <reference types="Cypress" />
import { expect } from 'chai'
import HomePage from '../../PageObject/HomePage'
import ShopPage from '../../PageObject/ShopPage'
describe('Test Case Eight', function() 
{
// function before akan dijalankan sebelum test case
//fixture merupakan data driven testing
//mengambil data json 
 
before(function()
{
    cy.fixture('example').then(function(data)
    {
        this.data=data
    })
})

it('My FirstTest case',function() {

    const homePage = new HomePage()
    const shopPage = new ShopPage()

    cy.visit(Cypress.env('url')+"angularpractice/")
    homePage.getInputName().type(this.data.name)
    homePage.getInputEmail().type(this.data.email)
    homePage.getCheckButton().click()
    homePage.getInputGender().select(this.data.gender)
    homePage.getEmployeeStatus().click()
    homePage.getDateOfBirth().click()
    //homePage.getDateOfBirth().invoke('removeAttr', 'type').type(this.data.birthDate)

    
    
    //validasi nama yang telah diinput
    homePage.getButtonBindind().should('have.value', this.data.name)
   
    //validasi jika terdapat element untuk menampilkan warning minimum input
    homePage.getInputName().should('have.attr', 'minlength', '2')
    
    //validasi radiobutton disabled
    homePage.getDisableRadioButton().should('be.disabled')
    
    shopPage.getShopButton().click()
    // iteration data json
    this.data.nameProduct.forEach(function(element)
    {   
        //cy.product merupakan custom commmand
        cy.product(element)
    })
    
    shopPage.getCheckoutButton().click()
    var sum = 0
    shopPage.getAmount().each((element, index , $list) =>
    {
        
        const amount = element.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum)+Number(res)
        
        
    }).then(function(){
        cy.log(sum)
    })
    shopPage.getTotalAmount().then(function(totalAmount){
        const amount = totalAmount.text()
        var res = amount.split(" ")
        res = res[1].trim()
        expect(Number(res)).to.equal(sum)
    })

  
    shopPage.getCheckoutButton2().click()
    shopPage.getCountryLocation().type(this.data.country)
    shopPage.getCountryList().click()
    shopPage.getCheckTermsAndCondition().click({force:true})
    shopPage.getPurchaseButton().click()
    shopPage.getAlertMessage().then(function(el)
    {
        const alert = el.text()
        expect(alert.includes("Success")).to.be.true
    })
  
 
})
 
 
})