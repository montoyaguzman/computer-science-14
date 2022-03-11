var matriz1 = [
    [1, 2, 4],
    [5, 2, 5],
    [8, 4, 3]
];

var matriz2 = [
    [4, 9, 0],
    [2, 7, 1],
    [1, 4, 1]
];

var matriz3 = [
    [4, 9, 0],
    [2, 7, 1],
    [1, 4, 1]
];

var resultado = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

var noFilas = matriz1.length;
var noColumnas = matriz1.length;
// Imprimir los valores de una matriz
for(var i = 0; i < noFilas; i++) {
    // resultado[i][i] = matriz1[i][i] + matriz2[i][i];
    for(var j = 0; j < noColumnas; j++) {
        // console.log('m['+i+']'+'['+j+']', matriz1[i][j]);
        // console.log('suma =>', matriz1[i][j] + matriz2[i][j]);
        resultado[i][j] = matriz1[i][j] + matriz2[i][j] + matriz3[i][j];
    }
}

console.log('MATRIZ 1')
console.log('matriz1', matriz1);
console.log('MATRIZ 2')
console.log('matriz2', matriz2);
console.log('RESULTADO')
console.log('resultado', resultado);
// for(var m = 0; m < matriz1.length; m++) {
//     console.log('matriz1', matriz1[m]);
// }

// console.log('MATRIZ 2')
// for(var n = 0; n < matriz2.length; n++) {
//     console.log('matriz2', matriz2[n]);
// }

// console.log('RESULTADO')
// for(var l = 0; l < resultado.length; l++) {
//     console.log('res', resultado[l]);
// }

