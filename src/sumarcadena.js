function sumarConDelimitadoresPersonalizados(cadena, delimitadores) {
  const delimitadoresEscapados = delimitadores.map(delimitador =>
    delimitador.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, "\\$&")
  );
  const regexDelimitadores = new RegExp(delimitadoresEscapados.join('|'), 'g');
  const numeros = cadena.split(regexDelimitadores).map(Number);
  
  return numeros
    .filter(numero => !isNaN(numero) && numero <= 1000)
    .reduce((total, numero) => total + numero, 0);
}

function sumarConDelimitadoresEstandar(cadena) {
  const partes = cadena.split(/,|-/);
  let sumaTotal = 0;

  partes.forEach(parte => {
    const numeroExtraido = Number(parte.split(/[^0-9]+/)[0]);

    if (!isNaN(numeroExtraido) && numeroExtraido <= 1000) {
      sumaTotal += numeroExtraido;
    }
  });

  return sumaTotal;
}

function calcularSumaDeCadena(cadena) {
  if (!cadena) return 0;

  if (cadena.startsWith("//[")) {
    const coincidenciaDelimitadores = cadena.match(/^\/\/(\[.*?\])+/);
    
    if (coincidenciaDelimitadores) {
      const delimitadoresPersonalizados = [...cadena.matchAll(/\[(.+?)\]/g)]
        .map(match => match[1]); 

      const cadenaNumeros = cadena.substring(coincidenciaDelimitadores[0].length);
      return sumarConDelimitadoresPersonalizados(cadenaNumeros, delimitadoresPersonalizados);
    }
  }

  return sumarConDelimitadoresEstandar(cadena);
}

export default calcularSumaDeCadena;
