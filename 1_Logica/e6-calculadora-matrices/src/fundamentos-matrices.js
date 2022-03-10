// arreglo
var array = [1, 3, 5, 7];
// array = 'patito'; // debilmente tipado

// arreglo de arreglos => matriz
var matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, { id: 1, name: 'peter' } ],
    [55, 16, 2127, 118],
    [15, 26, 77, 8],
    [85, 666, 17, 98],
    { id: 1, name: 'bruce' }, 
    "soy muy bueno con matrices",
    99999,
    { calificaciones: [10, 9, 10] }
];

console.log('array', array);
console.log('numero 3: ', array[1]);

console.log('numero 6', matriz);
console.log('numero 26', matriz[3][1]);
console.log('numero 17', matriz[4][2]);
console.log('numero 2127', matriz[2][2]);
console.log('numero 85', matriz[4][0]);
console.log('matriz', matriz[1][1]);
console.log('matriz', matriz[5]);
console.log('matriz', matriz[6]);
console.log('matriz', matriz[7]);
console.log('matriz', matriz[1][3].name);
console.log('9 = ', matriz[8].calificaciones[1]);


// Imprimir un arreglo
var array2 = [2, 4, 6, 8, 10];
// array[0] = 2
// array[1] = 4
// ...
// array[4] = 10
// console.log('array[0] = ', array[0])
// console.log('array[1] = ', array[1])

// valorInicial, condicion, razonDeCambio
for (var i = 0; i < array2.length; i++) {
    console.log('array[' + i + '] = ' + array2[i]);
}

// valorInicial
var j = 0;
// condicion
while(j < array2.length) {
    console.log('w array[' + j + '] = ' + array2[j]);
    // razonDeCambio
    j++;
}

// Imprimir de mayor al menor
// valorInicial, condicion, razonDeCambio
for (var i = array2.length - 1; i >= 0;  i--) {
    console.log('array[' + i + '] = ' + array2[i]);
}