import { createYield } from "typescript"

describe('My First UI Test', () => {
    it('Go to first person', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()
        
        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})