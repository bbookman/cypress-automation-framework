class HomePage_PO {
  visitHomePage() {
    cy.visit(Cypress.env("webdriver_uni"));
  }
}

export default HomePage_PO;
