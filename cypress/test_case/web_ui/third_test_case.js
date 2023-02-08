import AutomationPractice from "../../PageObject/AutomationPractice"
describe('My Third Test Suite', function() 
{
 
it('My Third Test case',function() {
 
const automationPractice = new AutomationPractice()
cy.visit(Cypress.env('url')+"AutomationPractice/")

//Check boxes
cy.visit(Cypress.env('url')+"AutomationPractice/")
automationPractice.getCheckBox1().check().should('be.checked').and('have.value','option1')
automationPractice.getCheckBox1().uncheck().should('not.be.checked')
automationPractice.getAllCheckBox().check(['option2','option3'])
 
//Static Dropdown
 automationPractice.getDropdownStatic().select('option2').should('have.value','option2')
 
//Dynamic dropdowns
automationPractice.getDropdownDynamic().type('ind')
automationPractice.getListDropdownDynamic().each(($e1, index, $list) => {
 
    if($e1.text()==="Indonesia")
    {
        $e1.trigger('click')
    }
})

//autocomplete
automationPractice.getDropdownDynamic().should('have.value','Indonesia')

//visible invisible
automationPractice.getDisplayedText().should('be.visible')
automationPractice.getHideTextBox().click()
automationPractice.getDisplayedText().should('not.be.visible')
automationPractice.getShowText().click()
automationPractice.getDisplayedText().should('be.visible')
 
//radio buttons
 automationPractice.getRadioButton().check().should('be.checked')

}  )
 
 
}  )