/// <reference types="Cypress"/>

describe("iframe stuff", () => {
  it("stuff", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });
    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("theFrame");
    });
    cy.get("@theFrame").find("#button-find-out-more").click();

    cy.get("@theFrame").find("#myModal").as("theModal");
    cy.get("@theModal").should(($expectedText) => {
      const text = $expectedText.text();
      expect(text).to.include("Welcome");
    });

    cy.get("@theModal").contains("Close").click();
    // cy.get("@theModal").contains("Close").click();
  });
});
