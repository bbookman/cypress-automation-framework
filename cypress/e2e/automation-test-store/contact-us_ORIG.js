/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  before(function () {
    cy.fixture("userDetails").as("user");
  });
  it.only("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get("@user").then((user) => {
      // cy.get('[name="first_name"]').type(user.first_name);
      // cy.get('[name="last_name"]').type(user.last_name);
      // cy.get('[name="email"]').type(user.email);

      cy.contactFormSubmit(
        user.first_name,
        user.last_name,
        user.email,
        "woo hoo",
        "h1",
        "Thank You "
      );
    });
  });
});
