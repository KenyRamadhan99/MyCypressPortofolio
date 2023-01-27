/// <reference types="Cypress" />
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

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get(':nth-child(1) > .form-control').type(this.data.name)
    cy.get('#exampleFormControlSelect1').select(this.data.gender)
 
 
})
 
 
})