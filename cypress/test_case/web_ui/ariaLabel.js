import { expect } from "chai"

describe('Aria Label Issue', function() 
{
 
it('Verify Aria Label',function() {

cy.visit("https://www.w3.org/WAI/ARIA/apg/example-index/carousel/carousel-1-prev-next")
// mengambil element parent dari aria label lalu di inisiasi untuk digunakan mencari child element nya
cy.get('#myCarousel-items').as('listAriaLabel')

// mengambil element child yang berisi text di gambar sekaligus melakukan assertion bahwa jumlah element text ada 6 
cy.get('@listAriaLabel').find('.carousel-item').should('have.length',6)

// mengambil element child yang berisi image sekaligus melakukan assertion bahwa jumlah element image ada 6 
cy.get('@listAriaLabel').find('.carousel-image').should('have.length',6)

// melakukan looping dengan cara menampung semua element caption ke dalam text
cy.get('@listAriaLabel').find('.carousel-item').each((el, index , $list) =>
{
    const textAria = el.find('[class="carousel-caption"]').text()
    // log akan menampilkan semua text yang ada pada element yang dicari
    cy.log(textAria)
    
    //lalu kita lakukan assertion
    if(textAria.includes("Travel"))
    {
        expect(textAria).to.exist 
    }
    else
    {
        print("Tidak Ada Text Yang Ditemukan")
    }

})
})
})
