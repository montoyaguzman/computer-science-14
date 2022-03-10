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