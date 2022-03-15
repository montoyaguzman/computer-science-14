// VARIABLES SIMPLES FUNCIONAN POR VALOR
let spString = 'Flash';
let spNumber = 10;
// VARIABLES COMPLEJAS FUNCIONAN POR REFERENCIAS
let spObj = { name: 'batman', age: 22, heigh: 90 };
let spArr = ['superman', 'batman', 'sazham', 'linterna verde'];


/*
console.log('spString: ' , spString);
console.log('spObj: ', spObj);
console.log('superheroesArr: ', spArr);
console.log('spNumber: ', spNumber);
*/

// simples
let spString2 = spString;
spString2 = 'Quick silver';
let spNumber2 = spNumber;
spNumber2 = 99;

// complejas
let spObj2 = { ...spObj };
spObj2.name = 'iron man';
spObj2.age = 40;
let spArr2 = [ ...spArr ];
spArr2.push('black widow');


// let nuevoObjeto = spObj2;
// nuevoObjeto.name = 'robin';
let nuevoObjeto = { ...spObj2, name: 'robin' }; 

console.log('============== CAMBIO ==============')
console.log('spString2: ' , spString, spString2);
console.log('spObj2: ', spObj, spObj2);
console.log('superheroesArr2: ', spArr, spArr2);
console.log('spNumber2: ', spNumber, spNumber2);
console.log('nuevoObjeto: ', nuevoObjeto, spObj2);