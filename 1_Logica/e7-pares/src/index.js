var arreglo = [2, 5, 19, 20, 33, 44, 4, 6, 9, 19, 35];

// console.log(arreglo[0])
// console.log(arreglo[1])
// console.log(arreglo[2])

// 1, 2, 3, 4 
for (var i = 0; i < arreglo.length; i++) {
    // % => Calcula el residuo de una division
    var numero = arreglo[i];
    if (numero % 2 !== 0) {
        console.log('elemento: ', arreglo[i]);
    }
}