var arrayE1 = [20, 68, 13, 70, 44];
var maxE1 = arrayE1[0];

let spaceE2 = ", "
let str1E2 = "radar"
let str2E2 = "casa"

let unicoE3 = [];
let vecesRepetidasE3 = [];
let contadorE3 = 1;

const numerosE4  = [1, 2, 2, 3, 4, 4, 5];
let duplicadosE4 = [];
const tempArrayE4 = [...numerosE4].sort();

const sizeE5 = 6
let horizontalE5 = " "


console.log("Ejercicio1")

function ejercicio1 () {
  for (let i = 0; i < arrayE1.length; i++) {
    if(arrayE1[i] >= maxE1){
      maxE1 = arrayE1[i];
    }
  }
  console.log(maxE1)
}

ejercicio1();


console.log("Ejercicio2")

function ejercicio2 (str1E2){
  for (let i =0; i < str1E2.length; i+=1) {
    if(str1E2[i] !== str1E2[str1E2.length-1-i]){
      return false;
    }
  }
  return true;
}
console.log(ejercicio2(str1E2) + spaceE2 + str1E2 + " es palíndromo");

function ejercicio2 (str2E2){
  for (let i =0; i < str2E2.length; i+=1) {
    if(str2E2[i] !== str2E2[str2E2.length-1-i]){
      return false;
    }
  }
  return true;
}
console.log(ejercicio2(str2E2) + spaceE2 + str2E2 + " no es palíndromo");


console.log("Ejercicio3")

function ejercicio3() {
  var matrizE3 = [ [1,0,0], [0,1,1], [0,1,0] ];
  console.log(matrizE3);
  var matrizE3array = matrizE3.flat()
  console.log(matrizE3array);

  for (let i = 0; i < matrizE3array.length; i++) {
    if(matrizE3array[i+1] === matrizE3array[i]){
      contadorE3++;
    }else{
      unicoE3.push(matrizE3array[i]);
      vecesRepetidasE3.push(contadorE3);
      contadorE3 = 1;
    }
  }
  
  console.log(unicoE3);
  console.log(vecesRepetidasE3);
  
  for (let j = 0; j < matrizE3array.length; j++) {
    if(unicoE3[j] === 0){
      console.log("El valor " + unicoE3[j] + " se repite " + vecesRepetidasE3[j] + " veces ");
    }
  }
}

ejercicio3();

console.log("Ejercicio4")

function ejercicio4() {
  for (let i = 0; i < tempArrayE4.length; i++) {
    if (tempArrayE4[i + 1] === tempArrayE4[i]) {
      duplicadosE4.push(tempArrayE4[i]);
    }
  }
  console.log(duplicadosE4); 
}

ejercicio4();

console.log("Ejercicio5")

function ejercicio5() {
  for (let i = 0; i < sizeE5; i++) {
    let horizontalE5 = " "
    for (let contadorhor = 1; contadorhor <= i; contadorhor++) {
      horizontalE5 += "* ";
    }
    console.log(horizontalE5);
  }
}

ejercicio5();

function main(){
  ejercicio1();
  ejercicio2();
  ejercicio3();
  ejercicio4();
  ejercicio5();
}

main();