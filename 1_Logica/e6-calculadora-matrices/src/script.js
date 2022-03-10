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

var resultado = [];

// Imprimir un arreglo
var array = [2, 4, 6, 8, 10];
// array[0] = 2
// array[1] = 4
// ...
// array[4] = 10
// console.log('array[0] = ', array[0])
// console.log('array[1] = ', array[1])

// valorInicial, condicion, razonDeCambio
for (var i = 0; i < array.length; i++) {
    console.log('array[' + i + '] = ' + array[i]);
}

// valorInicial
var j = 0;
// condicion
while(j < array.length) {
    console.log('w array[' + j + '] = ' + array[j]);
    // razonDeCambio
    j++;
}

// Imprimir los valores de una matriz