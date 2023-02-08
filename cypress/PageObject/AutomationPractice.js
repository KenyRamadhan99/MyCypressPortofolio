class AutomationPractice
{
    getAlert()
    {
        return  cy.get('#alertbtn')
    }
    getNewTab()
    {
        return cy.get('#opentab')
    }
    getRadioButton()
    {
        return cy.get('[value="radio2"]')
    }
    getShowText()
    {
        return cy.get('#show-textbox')
    }
    getHideTextBox()
    {
        return cy.get('#hide-textbox')
    }
    getDisplayedText()
    {
        return cy.get('#displayed-text')
    }
    getListDropdownDynamic()
    {
        return cy.get('.ui-menu-item div')
    }
    getDropdownDynamic()
    {
        return cy.get('#autocomplete')
    }
    getDropdownStatic()
    {
        return cy.get('select')
    }
    getAllCheckBox()
    {
        return cy.get('input[type="checkbox"]')
    }
    getCheckBox1()
    {
        return cy.get('#checkBoxOption1')
    }
    getMouseHover()
    {
        return cy.contains('Top')
    }
    getTabButton()
    {
        return cy.get('#opentab')
    }
    getIFrame()
    {
        return cy.frameLoaded('#courses-iframe')
    }
    getIFrameMentorship()
    {
        return cy.iframe().find("a[href*='mentorship']")
    }
    getIFramePricing()
    {
        return cy.iframe().find("h1[class*='pricing-title']")
    }
    

}
export default AutomationPractice