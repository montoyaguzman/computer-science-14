var resultado = 0;
var numero1 = prompt("Ingrese numero 1");
var numero2 = prompt("Ingrese numero 2");
var operacion = prompt("Ingrese operando");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

// CONDICIONES
// VALOR === VALOR_PARA_COMPROBAR
// if (operacion === '+') {
//     console.log(typeof numero1)
//     resultado = numero1 + numero2;
// } else if (operacion === '-') {
//     resultado = numero1 - numero2;
// } else if (operacion === '*') {
//     resultado = numero1 * numero2;
// } else if (operacion === '/') {
//     resultado = numero1 / numero2;
// } else {
//     console.log('ingresaste algo incorrecto');
// }

// VALOR
switch(operacion) {
    case '+': // VALOR_PARA_COMPROBAR
        suma();
    break;
    case '-': // VALOR_PARA_COMPROBAR
        resultado = numero1 - numero2;
    break;
    case '*': // VALOR_PARA_COMPROBAR
        resultado = numero1 * numero2;
    break;
    case '/': // VALOR_PARA_COMPROBAR
        resultado = numero1 / numero2;
    break;
    default:
        console.log('ingresaste algo incorrecto');
    break;
    // break finalizar la ejecucion de un bloque de codigo, en cuanto aparece lo finaliza
}

function suma(numero1, numero2) {
    resultado = numero1 + numero2;
}

console.log('resultado: ', resultado);