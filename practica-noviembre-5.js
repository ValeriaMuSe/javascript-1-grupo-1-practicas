// Variables
//Ejercicio4
var strArray = "es martes";


// Ejercicio 1
// Par o impar
let num = prompt("Digite un número");
if (num % 2 === 0){
  alert(num + " es par")
}
if (num % 2 != 0 ){
  alert(num + " es impar")
}
// Divisible entre 3
if (num % 3 === 0 ){
  alert(num + " es divisible entre 3")
}
// Divisible entre 5
if (num % 5 === 0 ){
  alert(num + " es divisible entre 5")
}


// Ejercicio 2
function suma (suma, num){
  var num = parseInt(prompt("Ingresa un número"));
  var suma = num*(num + 1)/2;
  alert("La suma es " + suma)
}

suma();
 
// Ejercicio 3
console.log("Ejercicio3")
function reverseString (str){
  console.log("perro")
  var strArray = str.split("");
  var reverseStr = strArray.reverse();
  var result = reverseStr.join("")
  console.log(result);
}

reverseString("perro");

//Ejercicio 4
console.log("Ejercicio4")
function vowels (){
  console.log("es martes")
  var strArray = "es martes";
  strArray = strArray.replace(/[a,e,i,o,u]/ig, "i");
  console.log(strArray);
}

vowels();

// Ejercicio 5: Escriba una palabra y reordene sus letras en orden alfabético.
console.log("Ejercicio5")
function alphabetically (text){
  return [...text].sort((a, b) => a.localeCompare(b)).join("");
}

console.log(alphabetically("audífonos"));
