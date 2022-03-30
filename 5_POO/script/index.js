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
    attack: function (bonus) {
        console.log('latigo cepa!!!', bonus)
    },
    corre: function() {
        console.log('corre lento!!!')
    },
    isAlive: function(points) {
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
    teach: function() { // Funcion que no retorna
        console.log('enseñar Catalogo de APIS y POO');
    },
    deliverCode: function() { // Funcion que si retorna algo
        const info = { ppt: 'presentacion.pptx', repositorio: 'http:....'};
        if (info) {
            return info;
        }
        return null;
    }
}

sensei.teach();
const data = sensei.deliverCode();
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