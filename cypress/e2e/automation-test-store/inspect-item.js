/// <reference types="Cypress"/>

describe('Inspect automation test store items using chain of commands', () => {
    it('Click on the first item using item header', () => {
        cy.visit('https://www.automationteststore.com/')
        //cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
        cy.get('.prdocutname').contains('SKINSHEEN BRONZER STICK').click()
    });
});