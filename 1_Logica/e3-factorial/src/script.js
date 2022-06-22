console.log('hola mundo');

/**
 * 1. Valor de inicio
 * 2. Condicion
 * 3. Razon de cambio
 */

var numero = 8;
var resultado = 1; // 1

while (numero - 1 >= 1) { // 2
    resultado = resultado * (numero);
    numero--; // 3
};


// (1 ; 2 ; 3)
// for (var i = 1; i <= NUMERO; i=i+1) {
//     FACTORIAL = FACTORIAL * i;
// }

console.log('resultado: ', resultado);

