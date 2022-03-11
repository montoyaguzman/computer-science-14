const suma = (numero1, numero2) => {
    let resultado = numero1 + numero2;
    return resultado;
}

// function suma(numero1, numero2) {
//     let resultado = numero1 + numero2;
//     return resultado;
// }

const resta = (numero1, numero2) => {
    let resultado = numero1 - numero2;
    return resultado;
}

// short form
const multiplica = (numero1, numero2) => numero1 * numero2;

// short form
const divide = (numero1, numero2) => numero1 / numero2;

const showMessage = msg => `Error ${msg}`; 

const calculadora = (numero1, numero2, operando) => {
  let resultado = 0;
  switch(operando) {
    case '+': 
        resultado = suma(numero1, numero2);
    break;
    case '-': 
        resultado = resta(numero1, numero2);
    break;
    case '*': 
      resultado = multiplica(numero1, numero2);
    break;
    case '/': 
      resultado = divide(numero1, numero2);
    break;
    default:
        const mensaje = showMessage('caso no encontrado');
        console.log(mensaje);
    break;
   } 
   return resultado;
}

let main = () => {
  let n1 = prompt("Ingrese numero 1");
  let n2 = prompt("Ingrese numero 2");
  let ope = prompt("Ingrese operacion");
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  const res = calculadora(n1, n2, ope); // entra a calculadora() => suma()
  console.log('respuesta: ', res);
}

main()
