//variables
var number = parseInt(prompt("Digite un número"));
alert("EL factorial de ese número es " + factorial(number));

var secretnumber = 13;
var intento = 0;
var adivinado = false;


// ejercicio1
function factorial(number) {
  if(number <= 1){
    return 1;
  }
  else{
    return number * factorial(number - 1);
  }
}

factorial()


// ejercicio2
function añobisiesto() {
  let year = prompt("Digite un año ")

  if(((year % 4 == 0) && (year % 100 != 0)) || year % 400 == 0){
    alert("El año " + year + " es bisiesto")
  } else {
      alert("El año " +  year + " no es bisiesto")
  }
}

añobisiesto();



// ejercicio4

function randomnumber (){
  while (intento < 100){
    var number = prompt("Adivina el numero (del 1 al 100)")
    intento++;
    if (number == secretnumber){
      alert("¡Adivinaste!")
      break;
    } 
    else { 
      if (number > secretnumber){
        alert("No, el número es menor");
      }
      else {
        alert("El número es mayor");
      }
    }
  }
}

randomnumber()


// ejercicio5
function spaces() {
  const texto = "Hello World"
  let procesado
  
  procesado = texto.split(" ").join("")
  console.log(procesado);
}

spaces();

function main(){
  factorial();
  añobisiesto();;
  randomnumber()
  spaces();
}

main();