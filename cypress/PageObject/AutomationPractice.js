class AutomationPractice
{
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