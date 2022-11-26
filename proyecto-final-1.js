// Ejercicio 1
function ejercicio1(n){
  if (n<=1) return false;
  for (var i = 2; i <= n-1; i++)
    if (n % i == 0) return false;
    return true;
}

console.log(ejercicio1(70));
console.log(ejercicio1(23));


// Ejercicio 2
function ejercicio2() {
  console.log("Ejercicio 2")
  let a = parseInt(prompt("Digite el valor de a"));
  let b = parseInt(prompt("Digite el valor de b"));
  let c = parseInt(prompt("Digite el valor de c"));
  
  function x1 (a, b, c){
  return (-b + Math.sqrt(b**2 - 4*a*c)) / (2 * a);
  }
  var resultadox1 = x1 (a, b, c);
  console.log("x1 = " + resultadox1);

  function x2 (a, b, c){
    return (-b - Math.sqrt(b**2 - 4*a*c)) / (2 * a);
  }
  var resultadox2 = x2 (a, b, c);
  console.log("x2 = " + resultadox2);
}


// ejercicio3
function ejercicio3() {
  console.log("Ejercicio 3")
  for (let i = 1; i <= 100; i++) {
  console.log(i)
  }
}


// ejercicio4
function ejercicio4() {
  console.log("Ejercicio 4")
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0){
      console.log(i)
    }
  }
}


function main(){
  ejercicio1();
  ejercicio2();;
  ejercicio3()
  ejercicio4();
}

main();