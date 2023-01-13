export {};
import { When, Then } from "cypress-cucumber-preprocessor/steps";

describe("Ecommerce App Test", () => {
  it("All Components Working Fine!", () => {
    cy.visit("http://localhost:3000");
    cy.get("img");
    cy.get(".cart-btn").contains("Add to cart");
    cy.get(".set-cart-open").should("be.enabled");
  });
});

When("Item", () => {
  cy.get("img");
});
Then("the url is /", (url) => {
  cy.url().should("eq", `${Cypress.config().baseUrl}${url}`);
});
