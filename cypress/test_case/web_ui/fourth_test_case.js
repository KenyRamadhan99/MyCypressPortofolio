import AutomationPractice from "../../PageObject/AutomationPractice";
describe ('My Fourth Test', function() //Ini Test Suite 
{
  it('Test Case 4', function() // Ini Test Case
  {
    //Ini Test Step 
    const automationPractice = new AutomationPractice()
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/"); // visit digunakan untuk navigasi url
   automationPractice.AutomationPractice().click()
    cy.get('#confirmbtn').click()
    
    //Cypress secara otomatis menghandle alert, jadi untuk melakukan asertion pada teks alert 
    //harus menggunakan event window:alert , window:confirm , etc
    cy.on('window:alert', (str)=>
    {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.on('window:confirm', (str)=>
    {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

    //Manipulasi attribut agar tidak membuka tab baru menggunakan jquery karena cypress tidak bisa menghandle new tab dan new window
    automationPractice.getTabButton().invoke('removeAttr','target').click()
    cy.url().should('include','rahulshettyacademy')
    
    //Navigasi 
    cy.go('back')

})
})

