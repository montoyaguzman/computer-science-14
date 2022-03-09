var resultado = 0;
var numero1 = 100;
var numero2 = 20;
var operacion = 'resta';

if (operacion === 'suma') {
    resultado = numero1 + numero2;
} else if (operacion === 'resta') {
    resultado = numero1 - numero2;
}
// resultado = numero1 * numero2;
// resultado = numero1 / numero2;

console.log('resultado: ', resultado);