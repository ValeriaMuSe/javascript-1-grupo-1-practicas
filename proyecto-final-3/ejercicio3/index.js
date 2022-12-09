const valor1 = document.getElementById('number1');
const valor2 = document.getElementById('number2');
const result = document.getElementById('result');

document.getElementById('sum').addEventListener('click', () => {
  result.value =
  parseInt(valor1.value)+parseInt(valor2.value);
});

document.getElementById('res').addEventListener('click', () => {
  result.value =
  parseInt(valor1.value)-parseInt(valor2.value);
});

document.getElementById('mul').addEventListener('click', () => {
  result.value =
  parseInt(valor1.value)*parseInt(valor2.value);
});

document.getElementById('div').addEventListener('click', () => {
  result.value =
  (parseInt(valor1.value)/parseInt(valor2.value)).toFixed(2);
});