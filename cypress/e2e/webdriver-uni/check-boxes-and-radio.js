/// <reference types="Cypress"/>

describe("iframe stuff", () => {
  it("stuff", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    // #checkboxes > label:nth-child(1) > input[type=checkbox]
    cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");
    cy.get("#checkboxes > :nth-child(5) > input").check().should("be.checked");
    cy.get("#checkboxes > :nth-child(5) > input").as("option-5");
    cy.get("@option-5").should("be.checked");
    cy.get("@option-5").check().should("be.checked");
  });

  it("stuff also", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("input[type='checkbox']")
      .check(["option-1", "option-2", "option-3"])
      .should("be.checked");
  });

  it("more stuff", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#radio-buttons").find("[type='radio']").eq(0).check();
  });

  it.only("more stuff", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    // cy.get("#radio-buttons").find("[name='vegatable']")
    cy.get("[value='lettuce']").should("not.be.checked").check();
    cy.get("[value='lettuce']").should("be.checked").check();
  });
});
