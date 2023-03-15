/// <reference types="Cypress"/>

describe("something", () => {
  it("dumb", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add");
  });

  it.only("dumb one", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");
    var total = 0;
    cy.get("@itemPrice").then(($linkText) => {
      var itemPriceTotal = 0;
      var itemPrice = $linkText.split("$");
      var i;
      for (i = 0; i < itemPrice.length; i++) {
        itemPriceTotal += Number(itemPrice[i]);
      }
      total += itemPriceTotal;
    });

    cy.get("@saleItemPrice")
      .then(($linkText) => {
        var saleItemPrice = 0;
        var saleItemPrice = $linkText.split("$");
        var i;
        for (i = 0; i < saleItemPrice.length; i++) {
          saleItemPrice += Number(saleItemPrice[i]);
        }
        total += saleItemPrice;
      })

      .then(() => {
        cy.log("Total: " + total);
        expect(total).to.equal(572.45);
      });
  });
});
