// Sintaxis usando new Object
// const pokemon = new Object();
// pokemon.name = 'bulbasaur';
// pokemon.type = 'grass';

// Sintaxis de iniciador de objeto
const pokemon = {
    name: 'bulbasaur',
    type: 'grass',
    rankings: { attack: 90, deffense: 80, hp: 100 },
    color: 'green',
    height: 1,
    weight: 5,
    // No podemos definir metodos
    // function defiende() {
    // }
    attack: function (bonus) { // Funcion que no retorna un valor
        console.log('latigo cepa!!!', bonus)
    },
    run: function() { // Funcion que no retorna un valor
        console.log('corre lento!!!')
    },
    isAlive: function(points) { // Funcion que si retorna un valor
        if (points > 1) {
            return true;
        }
        return false;
    }
};

console.log(pokemon.name);
pokemon.attack(50);
console.log(pokemon.isAlive(2));

const sensei = {
    name: '',
    teach: function() { // Funcion que no retorna un valor
        console.log('enseñar Catalogo de APIS y POO');
    },
    deliverCode: function() { // Funcion que si retorna un valor
        const info = { ppt: 'presentacion.pptx', repositorio: 'http:....'};
        if (info) {
            return info;
        }
        return null;
    }
}

sensei.teach();
const data = sensei.deliverCode();
data.ppt = 'excel.xls';
console.log(data);

/**
 * Los inicialiazadores de objetos no son optimos cuando requerimos
 * crear muchos objetos porque repetiriamos el codigo y la estrctura 
 * del objeto.
 */

// const pokemon2 = {
//     name: 'ivysaur',
//     type: 'grass',
//     rankings: { attack: 95, deffense: 80, hp: 100 },
//     color: 'green and blue',
//     height: 1.2,
//     weight: 55,
// };

// const pokemon3 = {
//     name: 'ivysaur',
//     type: 'grass',
//     rankings: { attack: 95, deffense: 80, hp: 100 },
//     color: 'green and blue',
//     height: 1.2,
//     weight: 55,
// };

/**  
 * Funcion constructora 
 * Seria una mejora, consiste de una funcion que crea objetos
 * y los devuelve
 * */
function createPokemon(name, type, power) {
    const pokemon = {
        name: name,
        type: type,
        power: power,
        attack: function (bonus) { 
            console.log(`${this.power}`, bonus);
        },
        isAlive: function(points) {
            if (points > 1) {
                return true;
            }
            return false;
        }
    };
    // pokemon.attack = function (bonus) { 
    //     console.log(`${this.power}`, bonus);
    // };
    // pokemon.isAlive = function(points) {
    //     if (points > 1) {
    //         return true;
    //     }
    //     return false;
    // };
    return pokemon;
}


const pikachu = createPokemon('pikachu', 'electric', 'thunder');
console.log('pikachu: ', pikachu);
pikachu.attack(10);

/** 
 * Funcion constructora con create object 
 * Con ayuda de la funcion create de Object podemos crear
 * objetos con una sintaxis ligeramente mas limpia
 * */
function createPokemon2(name, type, power) {
    const pokemon = Object.create(createPokemon2.prototype);
    pokemon.name = name,
    pokemon.type = type,
    pokemon.power = power,
    pokemon.attack = function (bonus) { 
        console.log(`${this.power}`, bonus);
    },
    pokemon.isAlive = function(points) {
        if (points > 1) {
            return true;
        }
        return false;
    }
    return pokemon;
}

/**
 * Para agregar metodos compartidos a los objetos nos
 * valemos de la propiedad prototype que es una propiedad
 * que todos los objetos que creemos heredad de "arriba"
 * concretemente desde Object, esto es lo que se conoce como
 * cadena de prototipos en JS.
 */
createPokemon2.prototype.specialAttack =  function () { 
    console.log('== ataque especial ==');
};

var pikachu2 = createPokemon2('pikachu', 'electric', 'thunder');
console.log('pikachu2: ', pikachu2);
pikachu2.specialAttack();

/**
 *  Funcion constructora new 
 * A partir de ES6, se incluyo las keywords this y new.
 * Una funcion constructora invocado con new, atutomaticamente devuelve un objeto.
 * This es una palabra reservada que es el objeto que ejecuta la funcion.
*/
function Pokemon(name, type, power) {
    this.name = name;
    this.type = type;
    this.power = power;
    this.attack = function (bonus) { 
        console.log(`${this.power}`, bonus);
    };
    this.isAlive = function(points) {
        if (points > 1) {
            return true;
        }
        return false;
    }
};

Pokemon.prototype.specialAttack =  function () { 
    console.log('== ataque especial ==');
};

const bulbasaur = new Pokemon('bulbasaur', 'grass', 'razor blades');
console.log('bulbasaur: ', bulbasaur);
bulbasaur.attack(20);
bulbasaur.specialAttack();
const charmander = new Pokemon('charmander', 'fire', 'flamethower');
console.log('charmander: ', charmander);
charmander.attack(30);
// Objeto sin parametros para el constructor se creará con valores undefined
// const charizard = new Pokemon();
// console.log(charizard);

/* Prototype y como compartir metodos */

/* Hacer todo eso de arriba class, this, new => sugar syntaxis */
