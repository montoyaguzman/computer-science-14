const arr = [19, 29, 39, 49, { id: 1, name: 'jose'} ];

// for(let i = 0; i < arr.length; i++) {
//   console.log('for: ', arr[i]);
// }

// const arrowFn = (element, index) => console.log(`patito${index}`, element)
// arr.map(arrowFn);

// map
console.log('-- MAP --')
// arr.map((element, index) => console.log(`patito${index}`, element)); // arr[i]
const newArr1 = arr.map((element, index) => {
  console.log(`patito${index}`, element)
  return element;
});
console.log('newArr1: ', newArr1);

// foreach
console.log('-- FOREACH --')
// arr.forEach((element, index) => console.log(`patito${index}`, element)); // arr[i]
const newArr2 = arr.forEach((element, index) => {
  console.log(`patito${index}`, element)
});
console.log('newArr2: ', newArr2);