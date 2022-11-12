function program() {
  var array= [];
   
while(true){
  let number = prompt("Ingrese sus números");
  if(number === ""){
    break;
  }
  array.push(parseInt(number));
}

console.log(array);

function average(myArray) {
  var i = 0;
  var sum = 0;
  var ArrayLen = array.length;

  while (i < ArrayLen) {
    sum = sum + array[i++];
  }
  return sum / ArrayLen;
}

var result = average(array).toFixed(2);
console.log("Promedio " + result);

function median(array) {
  array = array.sort((a,b) => a - b);
  if(array % 2 != 0) {
    return array [Math.floor(array.length / 2)];
  }
  if (array % 2 === 0) {
    let med1 = array[array.length / 2];
    let med2 = arr[array.length / 2 -1];
    console.log((med1 + med2) / 2); 
  }
}


console.log("Mediana " + median(array));

console.log("Máximo " + Math.max(...array));
console.log("Mínimo " + Math.min(...array));
}

program()