const arr = [19, 29, 39, 49, { id: 1, name: 'jose'} ];

for(let i = 0; i < arr.length; i++) {
  console.log('for: ', arr[i]);
}

// map
arr.map((element, index) => console.log(`patito${index}`, element)); // arr[i]

const arrowFn = (element, index) => console.log(`patito${index}`, element)
arr.map(arrowFn);