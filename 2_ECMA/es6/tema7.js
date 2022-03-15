function imprimeArray(arr) {
    console.log(`Array:`, ...arr)
  }
  
  const arreglo = [19, 29, 39, 49, { id: 1, name: 'jose'} ];
  arreglo.push(99999);
  imprimeArray(arreglo);
  
  const newArr = arreglo.slice(0, 4);
  console.log('newArray', newArr);
  
  const newArr2 = arreglo.splice(1, 2);
  console.log('newArray', newArr2);