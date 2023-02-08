class GreenKart
{
    getSearchColumn()
    {
        return cy.get('.search-keyword')
    }
    getAllProductColumn()
    {
        return cy.get('.products')
    }
}

export default GreenKart