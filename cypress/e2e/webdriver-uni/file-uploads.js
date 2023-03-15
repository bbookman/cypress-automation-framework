/// <reference types="Cypress"/>

describe("someshit", () => {
  it("upload a file", () => {
    cy.visit("https://www.webdriveruniversity.com/File-Upload/index.html");
    cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
    const stub = cy.stub();

    cy.on("window:alert", stub);
    cy.get("#submit-button")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          "Your file has now been uploaded!"
        );
      });
  });

  it.only("upload no file", () => {
    cy.visit("https://www.webdriveruniversity.com/File-Upload/index.html");
    const stub = cy.stub();

    cy.on("window:alert", stub);
    cy.get("#submit-button")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          "You need to select a file to upload!"
        );
      });
  });
});
