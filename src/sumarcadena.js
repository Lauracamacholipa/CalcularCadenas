function procesarDelimitadorPersonalizado(cadena, delimitador) {
  const regex = new RegExp(`[${delimitador}]`);
  const numeros = cadena.split(regex).map(Number);
  return numeros.filter(num => !isNaN(num) && num <= 1000).reduce((acc, num) => acc + num, 0);
}

function procesarDelimitadoresEstándar(cadena) {
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

function calcularCadena(cadena) {
  if (!cadena) return 0; 

  if (cadena.startsWith("//[")) {
    const match = cadena.match(/^\/\/\[(.*?)\]/);
    if (match) {
      const delimitador = match[1]; 
      cadena = cadena.substring(match[0].length); 
      return procesarDelimitadorPersonalizado(cadena, delimitador); 
    }
  }
  return procesarDelimitadoresEstándar(cadena);
}
  
export default calcularCadena;
  