/// <reference types="Cypress"/>

// https://www.webdriveruniversity.com/Datepicker/index.html

describe("date picking", () => {
  it("stuff", () => {
    cy.visit("https://www.webdriveruniversity.com/Datepicker/index.html");
    cy.get("#datepicker").click();
    let date = new Date();
    date.setDate(date.getDate() + 580);
    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("default", { month: "long" });
    var futureDay = date.getDate();
    cy.log("futureYear: " + futureYear);
    cy.log("futureMonth: " + futureMonth);
    cy.log("futureDay: " + futureDay);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        });
    }
    function selectFutureDay() {
      //cy.get('[class="day"]').contains(futureDay).click();
      cy.get(".day").contains(futureDay).click();
    }
    selectMonthAndYear();
    selectFutureDay();
  });
});
