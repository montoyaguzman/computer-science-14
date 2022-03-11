main() // el hoisting de js SUBE las funciones

function main() {
  calculadora(); // entra a calculadora() => suma()
  console.log('respuesta: ', calculadora());
}

function calculadora() {
  let resultado = 0;
  let numero1 = 8;
  let numero2 = 4;
  let operacion = '+';
  switch(operacion) {
    case '+': 
        resultado = suma(numero1, numero2);
    break;
    case '-': 
        resultado = resta();
    break;
    case '*': 
      resultado = multiplica();
    break;
    case '/': 
      resultado = division();
    break;
    default:
        console.log('ingresaste algo incorrecto');
    break;
   } 
   return resultado;
}

// function nombreFn(param1, param2, ... , paramN) {
  // sentences
  // opcional valor de retorno
//}
function suma(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
    // console.log('resultado en funcion suma: ', resultado);
}

function resta(numero1, numero2) {
    let resultado = numero1 - numero2;
    return resultado;
}

function multiplica(numero1, numero2) {
    let resultado = numero1 * numero2;
    return resultado;
}

function divide(numero1, numero2) {
    let resultado = numero1 / numero2;
    return resultado;
}

