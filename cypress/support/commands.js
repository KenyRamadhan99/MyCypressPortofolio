// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('product', (productName) => {
    cy.get('h4.card-title').each((el, index , list) => 
{
    if(el.text().includes(productName))
    {
        cy.get('button,btn.btn-info').eq(index).click()
    }
})
  })

  Cypress.Commands.add('amount', () => {
    cy.get('tr td:nth-child(4) > strong').each((el, index , list) => 
{
    const amount = el.text()
    var res = amount.split(" ")
    res = res[1].trim()
    sum = Number(sum)+Number(res)
}).then(function(){
    cy.log(sum)
})
  })

  Cypress.Commands.add('totalAmount', () => {
    cy.get('tr td:nth-child(4) > strong').each((el, index , list) => 
{
    const amount = el.text()
    var res = amount.split(" ")
    res = res[1].trim()
    expect(Number(res)).to.equal(sum)
})
  })
//


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })