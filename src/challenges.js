// Desafio 1
const valor1 = true;
const valor2 = false;
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }  
}

// Desafio 2

function calcArea(base, altura) {
  let area = (base * altura)/2;
  return area;
}

// Desafio 3
let string = 'vamo que vamo'
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let ultimoTermo = array.length - 1;
  let concat = array[ultimoTermo] + ', ' + array[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultadoPoints = wins*3 + ties;
  return resultadoPoints;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
