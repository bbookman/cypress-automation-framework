/// <reference types="Cypress"/>

describe("", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("farts", () => {
    var userDetails = [];
    let numb = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        var i = 0;
        for (i; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            cy.log("found: " + Number(userDetails[i]));
            numb += Number(userDetails[i]);
          }
        }
        cy.log("Total age: " + numb);
        expect(numb).to.eq(322);
      });
  });

  it.only("stinks", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (age) {
            const userAge = age.text();
            expect(userAge).eq("80");
          });
      }
    });
  });
});
