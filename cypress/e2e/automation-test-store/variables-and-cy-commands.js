/// <reference types="Cypress"/>

describe('another test', () => {
    it('tests shit', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            });
        })
});