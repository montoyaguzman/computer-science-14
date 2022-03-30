// this en el scope global
console.log(`this (scope global): ${this}`)

// this en el scope de una funcion
function whoIsThis() {
    return this
}
console.log(`this (scope function): ${whoIsThis()}`)

// this en el scope de una funcion (strict mode)
function whoIsThisStrict() {
    'use strict'
    return this
}
console.log(`this (scope function strictMode): ${whoIsThisStrict()}`)

// this en el scope de un objeto
const person = {
    name: 'José',
    sayHello: function() {
        console.log(`Hola soy ${this.name}`)
        console.log('this:', this)
    }
}
person.sayHello()

// this cuando sacamos una funcion de un objeto
const accion = person.sayHello
accion()

// this en el contexto de una clase
function Person(name) {
    this.name = name
}
Person.prototype.sayHello = function() {
    console.log(`Me llamo ${this.name}`)
    console.log('this:', this)
}
const mimi = new Person('Mimi')
mimi.sayHello()