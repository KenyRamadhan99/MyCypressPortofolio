import AutomationPractice from "../../PageObject/AutomationPractice"
describe('My Second Test Suite', function() 
{
 
it('Test Case 6',function() {
 

cy.visit(Cypress.env('url')+"AutomationPractice/")
 // Ada 2 Cara untuk meng handle element yang invisible
// pertama ,{force: true} digunakan untuk mem by pass element yang tidak terlihat 
// kedua menggunakan jquery method show() yang mana akan menampikan elemen invisible 
//cy.get('.mouse-hover-content').invoke('show')
const automationPractice = new AutomationPractice()

if (automationPractice.getMouseHover().click({force: true}))
{
    cy.url().should('include','top')
} else {
    print('Failed')
}

automationPractice.getTabButton().then(function(el)
{
    const url=el.prop('href')
    cy.log(url)
})


 
 
})
 
 
})