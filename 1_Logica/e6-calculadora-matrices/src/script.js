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

var resultado = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
console.log('iniciando');
debugger;
// Imprimir los valores de una matriz
for(var i = 0; i < matriz1.length; i++) {
    for(var j = 0; j < matriz1.length; j++) {
        // console.log('m['+i+']'+'['+j+']', matriz1[i][j]);
        // console.log('suma =>', matriz1[i][j] + matriz2[i][j]);
        resultado[i][j] = matriz1[i][j] + matriz2[i][i];
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

