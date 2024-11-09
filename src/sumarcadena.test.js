import calcularCadena from "./sumarcadena.js";

describe("Sumar cadenas", () => {
    it("Si no hay una cadena deberia devolver 0", () => {
        expect(calcularCadena("")).toEqual(0);
    });
});