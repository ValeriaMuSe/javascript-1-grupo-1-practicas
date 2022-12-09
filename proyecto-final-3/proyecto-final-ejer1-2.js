function xPattern(matriz) {
  let matrices = [];

  for (let i = 0; i < matriz; i++){
    let row = []

    for (let j = 0; j < matriz; j++){
      if ( i == j) {
        row.push("*");
      } else if (j + 1 === matriz - i) {
        row.push("*");
      } else {
        row.push(0);
      }
    }
    matrices.push(row)
  }
  return matrices
}

console.log(xPattern(5));


function diferent() {
  const array1  = [1, 2, 3, 5];
  const array2 = [1, 2, 3, 4];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++){
      if (array1[i] !== array2[j]) {
        console.log("Son diferentes " + array1[i], array2[j]);
      } else {
        console.log("Son iguales " + array1[i], array2[j]);
      }
    }
  } 
}

diferent()