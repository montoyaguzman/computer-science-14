var arreglo = [2, 5, 19, 20, 33, 44, 'un nombre', 4, 6, 9, 19, 35];

// console.log(arreglo[0])
// console.log(arreglo[1])
// console.log(arreglo[2])

/** PARES Y RESIDUOS */
// 1 entre 2, no cabe y sobra 1 (residuo)
// 2 entre 2 cabe una vez y sobra 0 (residuo)
// 3 entre 2 cabe una vez y sobra 1 (residuo) 
// 4 entre 2 cabe dos veces y sobre 0 (residuo)

/**
 * Este ciclo for inicia en cero porque el array comienza en la posicion 0 => (var i = 0;)
 * Su condicion la hacemos menor al tamaño del arreglo para no "salirnos" => (i < arreglo.length;)
 * Como vamos a recorrer posicion a posicion sumamos 1 en cada vuelta => (i++)
 */
for (var i = 0; i < arreglo.length; i++) {
    // % => Calcula el residuo de una division
    var numero = arreglo[i];
    if (typeof numero !== 'number') {
        console.log('no puedo procesar esa informacion');
        continue; // salta la a la siguiente iteracion en un ciclo, el codigo que viene despues es IGNORADO
    }
    if (numero % 2 === 0) {
        console.log('elemento: ', arreglo[i]);
    }
    // en este momento se hace el i++
}

var j = 0; // inicializacion
while(j < arreglo.length) { // condicion   
    var numero1 = arreglo[j];
    // Ejemplo de como excepciones try-catch
    if (typeof numero1 !== 'number') {
        console.log('no puedo procesar esa informacion');
        break; // detiene un ciclo
    }
    if (numero1 % 2 === 0) {
        console.log('elemento con while: ', arreglo[j]);
    }
    j++; // incremento/decremento => razonDeCambio
}
