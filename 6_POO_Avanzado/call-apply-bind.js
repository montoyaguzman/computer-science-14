 // Establecer this usando call
 function sayHello(anios) {
    this.anios = anios
    console.log(`Mi nombre es ${this.name} y mi apellido es ${this.app} y tengo ${anios} años`)
}
const montoya = {
    name: 'jose',
    app: 'montoya'
}
sayHello.call(montoya, 26)


function walk(distance, direction) {
    console.log(`${this.name} caminó ${distance} metros hacia el ${direction}`)
}
walk.call(montoya, 400, 'norte') // Call, C, comma

// Establecer this usando apply
const data = [800, 'sur']
walk.apply(montoya, data) // Apply, A, array

// Establecer this usando bind
const mimosa = {
    name: 'mimosa',
    app: 'cachorrita'
}
const mimosaSayHello = sayHello.bind(mimosa)
mimosaSayHello()

const mimosaWalk = walk.bind(mimosa)
mimosaWalk(500, 'este')

const mimosaWalk2 = walk.bind(mimosa, 500, 'oeste')
mimosaWalk2()

const mimosaWalk3 = walk.bind(mimosa, 500)
mimosaWalk3('noroeste')

// Ejemplo práctico
const buttons = document.getElementsByClassName('call-to-action')
/*
buttons.forEach(button => {
    button.onclick = () => alert('Nunca pares de aprender')
})
*/
Array.prototype.forEach.call(buttons, button => {
    button.onclick = () => alert(button.textContent)
})