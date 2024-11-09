describe("Sumador", () => {
    it("Cuando no ingrese ningún número y presione el botón calcular, se debería mostrar 0 como resultado", () => {
      cy.visit("/");
      cy.get("#cadena").clear();
      cy.get("#calculadora-button").click();
      cy.get("#resultado-div").should("contain", 0);
    });
    it("Cuando ingrese números mayores a 1000, estos deben ser ignorados en el cálculo", () => {
      cy.visit("/");
      cy.get("#cadena").type("10000");
      cy.get("#calculadora-button").click();
      cy.get("#resultado-div").should("contain", 0);
    });
    it("Cuando ingrese una cadena delimitadores establecidos (, o -), se debería mostrar la suma de los números.", () => {
      cy.visit("/");
      cy.get("#cadena").type("100,30-20");
      cy.get("#calculadora-button").click();
      cy.get("#resultado-div").should("contain", 150);
    });
    it("Cuando ingrese una cadena y ponga otros delimitadores aparte de (, o -), solo sumara los numero que tienen los delimitadores establecidos.", () => {
      cy.visit("/");
      cy.get("#cadena").type("20,50*70-10*9");
      cy.get("#calculadora-button").click();
      cy.get("#resultado-div").should("contain", 80);
    });
    it("Cuando ingrese una cadena con (//[]) se deberá mostrar la suma de los números que contenga ese delimitador.", () => {
      cy.visit("/");
      cy.get("#cadena").type("//[**] 6**4");
      cy.get("#calculadora-button").click();
      cy.get("#resultado-div").should("contain", 10);
    });
  });
  