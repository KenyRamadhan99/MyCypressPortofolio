class HomePage 
{
    getUrl()
    {
        return cy.visit('https://rahulshettyacademy.com/angularpractice/')
    }

    getInputName()
    {
        return cy.get(':nth-child(1) > .form-control')
    }

    getInputEmail()
    {
        return cy.get(':nth-child(2) > .form-control')
    }
    
    getInputPassword()
    {
        return cy.get('#exampleInputPassword1')
    }

    getCheckButton()
    {
        return cy.get('#exampleCheck1')
    }

    getDisableRadioButton()
    {
        return cy.get('#inlineRadio3')
    }

    getEmployeeStatus()
    {
        return cy.get('#inlineRadio2')
    }

    getInputGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }
    getButtonBindind()
    {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getDateOfBirth()
    {
        return cy.get(':nth-child(8) > .form-control')
    }

}
export default HomePage;
