describe ('My First Test', function() //Ini Test Suite 
{
  it('Test Case 1', function() // Ini Test Case
  {
    //Ini Test Step 
    cy.clearAllCookies
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/"); // visit digunakan untuk navigasi url
    cy.get('.search-keyword').type('ca', {force: true}); // Type digunakan untuk input
    cy.wait(2000); // wait digunakan untuk delay 
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length', 4); // ini hit element parent lalu cari element child nya
    cy.get('.product').should('have.length',5); // ini akan mengambil semua element bahkan yang tidak terlihat
    cy.get('.product:visible').should('have.length',4); // visible digunakan untuk validasi element yang hanya terlihat saja jadi element yang tidak terlihat tidak akan tertangkap oleh cypress
   
    // Parent Child Chaining
    
    cy.get(':nth-child(3) > .product-action > button').click(); // ini langsung hit child dari parent 
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click(); // kalo ini dirunut dari hit parent nya terus di cari child nya baru di hit child nya dengan masukin parameter
    
    cy.get('@productLocator').find('.product').each(($el, index , $list) => 
    {
      const textVeg = $el.find('h4.product-name').text();
      if(textVeg.includes('Cashews'))
      {
        $el.find('button').click()
      }
      else
      {
        print("No Product")
      }
    })

    cy.get('.cart-icon > img').click()
    cy.wait(2000)
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.wait(2000)
    cy.contains('Place Order').click()
    cy.wait(2000)

  })

})

