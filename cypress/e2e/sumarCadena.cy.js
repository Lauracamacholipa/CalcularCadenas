describe("Sumador", () => {
    it("Muestra 0 si el usuario ingresa una cadena vacia", () => {
      cy.visit("/");
      cy.get("#cadena").clear();
      cy.get("#calculadora-button").click();
      cy.get("#resultado-div").should("contain", 0);
    });
  });
  