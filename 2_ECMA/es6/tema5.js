const arr = [19, 29, 39, 49, { id: 1, name: 'jose'} ];
const obj = { id: 1, name: 'jose', app: 'montoya' };

for (let element of arr) {
  console.log(`element: `, element)
}

for (let elementObj in obj) {
  console.log(`elementObj: `, obj[elementObj])
}