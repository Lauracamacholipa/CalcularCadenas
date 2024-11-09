function procesarDelimitadorPersonalizado(cadena, delimitadores) {
  const regex = new RegExp(delimitadores.map(d => d.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, "\\$&")).join('|'), 'g');
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
      const delimitadores = match[1]
        .split('][')  
        .map(d => d.trim())  
        .filter(d => d.length > 0); 
      cadena = cadena.substring(match[0].length); 
      return procesarDelimitadorPersonalizado(cadena, delimitadores);
    }
  }
  return procesarDelimitadoresEstándar(cadena);
}

export default calcularCadena;
