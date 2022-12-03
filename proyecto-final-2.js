/* Ejercicio 1 (lo intente profe, salió pero a medias y por aquello
lo tengo comententado porque no sé por qué pero no salen las demás respuestas)

function ejercicio1() {
  const sizeE1 = 10
  for (let i = 1; i <= sizeE1; i++) {
    let horizontalE1 = "******#### "
    for (let contador = sizeE1; contador <= i; contador--) {
    horizontalE1 += " " 
  }
  console.log(horizontalE1);
  }
}

*/


// Ejercicio 2
function ejercicio2() {
  let a = 5;
  let b = 3;

  console.log("La potencia es " + Math.pow(a, b));
}

// Ejercicio 3
function ejercicio3(a, b){
  if (b === 0){
    return 1;
  } else {
    return a * ejercicio3(a, b - 1)
  }
}

// Ejercicio 4
function ejercicio4(number) {
  if(number.length === 1){
    return number[0];
  } else {
    return number.pop(0) + ejercicio4(number);
  }
}




function main(){
  // ejercicio1()
  ejercicio2();
  console.log("La potencia recursiva es " + ejercicio3(3, 4));
  console.log("La suma es " + ejercicio4([1,1,2,3])); // 7
}

main();