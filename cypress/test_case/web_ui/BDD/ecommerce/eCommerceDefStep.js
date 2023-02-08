import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import ShopPage from "../../../../PageObject/ShopPage";
import HomePage from "../../../../PageObject/HomePage";

const homePage = new HomePage()
const shopPage = new ShopPage()
let name 
Given("I Open Ecommerce Page", function()
{
    cy.visit(Cypress.env('url')+"angularpractice/")
});

// When I Add Items To Cart
When("I Add Items To Cart", ()=>
{
    shopPage.getShopButton().click()
    // iteration data json
  
  
})
// And I Validate The Total Price
When("I Validate The Total Price",function()
{
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


})
// Then Select The Country Submit And Verify Thank You
Then("Select The Country Submit And Verify Thank You", function()
{
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

When("I fill the form details", function(dataTable)
{
    //Input Form 
    name = dataTable.rawTable[1][0]
    homePage.getInputName().type(dataTable.rawTable[1][0])
    homePage.getInputEmail().type(dataTable.rawTable[1][1])
   
})

Then("validate the forms behaviour", function()
{
     homePage.getButtonBindind().should('have.value', name)
     homePage.getInputName().should('have.attr', 'minlength', '2')
     homePage.getDisableRadioButton().should('be.disabled')
     Cypress.config("defaultCommandTimeout, 8000")
})

Then("select the Shop Page",function()
{
    shopPage.getShopButton().click()
})