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

/* Funcion constructora */
function createPokemon(name, type) {
    const pokemon = {
        name: name,
        type: type
    }
    return pokemon;
}
const pikachu = createPokemon('pikachu', 'electric');
console.log(pikachu);

/* Funcion constructora new */
function Pokemon(name, type) {
    this.name = name;
    this.type = type;
};

const bulbasaur = new Pokemon('bulbasaur', 'grass');
console.log(bulbasaur);
const charmander = new Pokemon('charmander', 'fire');
console.log(charmander);
const charizard = new Pokemon();
console.log(charizard);

/* Prototype y como compartir metodos */

/* Hacer todo eso de arriba class, this, new => sugar syntaxis */
