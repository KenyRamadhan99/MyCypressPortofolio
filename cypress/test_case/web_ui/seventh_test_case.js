/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import AutomationPractice from '../../PageObject/AutomationPractice'
import 'cypress-iframe'

describe('Frames Test', function(){
    it('Demo Example',function(){
        cy.visit(Cypress.env('url')+"AutomationPractice/")
        const automationPractice = new AutomationPractice()

        automationPractice.getIFrame()
        automationPractice.getIFrameMentorship().eq(0).click()
        cy.wait(5000)
        automationPractice.getIFramePricing().should('have.length', '2')     
        
       
        
    })
})