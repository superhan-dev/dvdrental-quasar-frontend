describe("Route to payment page", () => {
  beforeEach(() => {
    cy.visit("/payment");
  });
  it("Welcome to payment page", () => {
    cy.get("h1").should("contain", "Welcome to test world!!");
  });
});
