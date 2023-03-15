/// <reference types="Cypress"/>
import HomePage_PO from "../../support/pageObjects/webdriver-uni/HomePage_PO";

describe("Test contact us form", () => {
  beforeEach(function () {
    const homepage_PO = new HomePage_PO();
    homepage_PO.visitHomePage();
  });
  it.only("should be able to submit valid contact form", () => {
    // cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Bruce");
    cy.get('[name="last_name"]').type("Bookman");
    cy.get('[name="email"]').type("bruce.bookman@gmail.com");
    cy.get("textarea.feedback-input").type("some comment");
    cy.get('[type="submit"]').click();
    //div[@id='contact_reply']/h1[.='Thank You for your Message!']
    cy.get("h1").should("have.text", "Thank You");
  });
  it("should not be able to submit valid contact form", () => {
    // cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Bruce");
    cy.get('[name="last_name"]').type("Bookman");
    // cy.get('[name="email"]')
    //   .type("bruce.bookman@gmail.com")
    cy.get("textarea.feedback-input").type("some comment");
    cy.get('[type="submit"]').click();
  });
});
