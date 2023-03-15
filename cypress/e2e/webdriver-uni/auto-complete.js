/// <reference types="Cypress"/>

describe("test autocomplete", () => {
  it("sometest", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myInput").type("G");
    cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
      const prod = $el.text();
      //   let productToSelect = "Avacado";
      //   if (prod === productToSelect) {
      //     $el.click();

      //     cy.get("#submit-button").click();
      //     cy.url().should("include", productToSelect);
      //   }
      const productToSelect = "Grapes";
      if (prod === productToSelect) {
        $el.trigger("click");

        cy.get("#submit-button").click();
        cy.url().should("include", productToSelect);
      }
    });
  });
});
