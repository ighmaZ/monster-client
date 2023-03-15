/// <reference types="cypress"/>

describe("monster app", () => {
  beforeEach(() => {
    // runs the url in every tests
    cy.visit("http://localhost:5173/");
  });

  it("click on Add Monsters", () => {
    cy.get("#btn-add").click();
  });
  it("click on delete Monsters", () => {
    cy.get("#btn-delete").click();
  });

  it("allow users to type in monster name", () => {
    cy.get("#name").type("new monster");
    cy.get("#name").should("have.value", "new monster");
  });

  it("allow users to add description", () => {
    cy.get("#description").type("most powerful ");
    cy.get("#description").should("have.value", "most powerful ");
  });

  it("allow users to add kills", () => {
    cy.get("#kills").type("20");
    cy.get("#kills").should("have.value", "20");
  });
});
