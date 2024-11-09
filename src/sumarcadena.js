function calcularCadena(cadena) {
    if (cadena === "") {
        return 0;
    }

    const partes = cadena.split(/,|-/);
    let suma = 0;

    partes.forEach(parte => {
        let numero = parte.split(/[^0-9]+/)[0];

        numero = Number(numero);

        if (!isNaN(numero) && numero <= 1000) {
        suma += numero;
        }
    });

    return suma;
  }
  
  export default calcularCadena;
  