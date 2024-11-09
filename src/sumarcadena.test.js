import calcularCadena from "./sumarcadena.js";

describe("Sumar cadenas", () => {
    it("Si no hay una cadena deberia devolver 0", () => {
        expect(calcularCadena("")).toEqual(0);
    });
    it("Si hay una cadena de un solo numero deberia devolver el mismo numero", () => {
        expect(calcularCadena("100")).toEqual(100);
    });
    it("Si hay una cadena de un un numero mayor a 1000 deveria ignorar este numero", () => {
        expect(calcularCadena("2000")).toEqual(0);
    });
});