class ShopPage 
{
    getShopButton()
    {
        return cy.contains('Shop')
    }

    getCheckoutButton()
    {
        return cy.get('.nav-link.btn.btn-primary')
    }

    getCheckoutButton2()
    {
        return cy.get('button.btn.btn.btn-success')
    }

    getCountryLocation()
    {
        return cy.get('#country')
    }

    getCountryList()
    {
        return cy.get('.suggestions > ul > li > a')
    }

    getCheckTermsAndCondition()
    {
        return cy.get("label[for='checkbox2']")
    }
    getPurchaseButton()
    {
        return cy.get("input[type='submit']")
    }
    getAlertMessage()
    {
        return cy.get('.alert')
    }
    getAmount()
    {
        return cy.get('tr td:nth-child(4) > strong')
    }
    getTotalAmount()
    {
        return cy.get('h3 > strong')
    }
}

export default ShopPage;