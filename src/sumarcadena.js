function calcularCadena(cadena) {
    if (cadena === "") {
        return 0;
    }

    const numeros = cadena.split(",").map(Number);
    return numeros.reduce((acc, num) => acc + num, 0);
  }
  
  export default calcularCadena;
  