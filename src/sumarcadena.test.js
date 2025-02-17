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
    it("Si hay una cadena con el delimitador (,) se debería mostrar la suma de los números.", () => {
        expect(calcularCadena("3,2")).toEqual(5);
    });
    it("Si hay una cadena con el delimitador (-) se debería mostrar la suma de los números.", () => {
        expect(calcularCadena("8-2")).toEqual(10);
    });
    it("Si hay una cadena con los delimitadores establecidos (, o -) se debería mostrar la suma de los números.", () => {
        expect(calcularCadena("5-8,19")).toEqual(32);
    });
    it("Si hay una cadena otros simbolos en vez de (, o -) se ignorara los numeros a la izquierda de estos simbolos raros en la suma", () => {
        expect(calcularCadena("79*5+42-1")).toEqual(80);
    });
    it("Si hay una cadena con //[] se suman", () => {
        expect(calcularCadena("//[***] 2***3")).toEqual(5); 
    });
});