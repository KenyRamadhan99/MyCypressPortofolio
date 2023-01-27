describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 // Ada 2 Cara untuk meng handle element yang invisible
// pertama ,{force: true} digunakan untuk mem by pass element yang tidak terlihat 
// kedua menggunakan jquery method show() yang mana akan menampikan elemen invisible 
//cy.get('.mouse-hover-content').invoke('show')
if (cy.contains('Top').click({force: true}))
{
    cy.url().should('include','top')
} else {
    print('Failed')
}



 
 
})
 
 
})