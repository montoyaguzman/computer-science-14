const PI = 3.1416;
const STUDENT_NAME = 'Juan Lopez';

let numero1 = 1111;
var numero2 = 2222;
var numero3 = 3333;

function myFunction() {
  if (true) {
    let numero4 = 4444;
    console.log('dato: ', numero1);
    console.log('dato: ', numero2);
    console.log('dato: ', numero3);
    console.log('dato: ', numero4);
  }
  console.log('dato: ', numero1);
  console.log('dato: ', numero2);
  console.log('dato: ', numero3);
  // console.log('dato: ', numero4); // error 'ReferenceError: numero4 is not defined' ya que let es una definicion en el bloque
}
// console.log('dato: ', numero2);
// PI = 9000; // error 'Assignment to constant variable' ya que a una constante no se le reasignan valores

myFunction();


// cual es la diferencia entre declarar e inicializar una variable?
let myVariable; // declarar
myVariable = 'otro valor' // inicializar
let myVariable2 = 'un valor'; // declarar e inicializar

// var otroNumero = 10;
// console.log(otroNumero);


