/// <reference types="Cypress"/>



describe('Test Contact us form Automation Test Store', () => {
    it('should be able to submit form with valid data', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href$='contact']").then(function(ctext){
            console.log(ctext.text);
        })
 
    });
});