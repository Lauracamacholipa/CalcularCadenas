function calcularCadena(cadena) {
    if (cadena === "") {
        return 0;
    }

    const numeros = cadena.split(/,|-/).map(Number);
    const numerosFiltrados = numeros.filter(num => num <= 1000);
    return numerosFiltrados.reduce((acc, num) => acc + num, 0);
  }
  
  export default calcularCadena;
  