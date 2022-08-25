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
function highestCount(numberCont) {
  let maiorValor = -5;
  let increment = 0;
  //nessa parte eu descubro quem é o maior número do array
  for (let index = 0; index < numberCont.length; index += 1) {
    if (maiorValor < numberCont[index]) {
       maiorValor = numberCont[index];
    }
  }
//nessa parte eu descubro quantas vezes vai repetir esse maior termo
  for (let inx = 0; inx < numberCont.length; inx += 1) {
     if (maiorValor === numberCont[inx]) {
        increment += 1;
     }
  }
  return increment;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dcat1 = mouse - cat1;
  let dcat2 = mouse - cat2;
  let mcat1 = Math.abs(dcat1);
  let mcat2 = Math.abs(dcat2);
  if (mcat2 < mcat1) {
    return 'cat2';
  } else if (mcat1 < mcat2) {
    return 'cat1';        
    } else {
      return 'os gatos trombam e o rato foge';
    }
}

// Desafio 8
function fizzBuzz(numberTroca) {
  //verifica se é divisível por três e substitui
  for (let index = 0; index < numberTroca.length; index += 1) {
    if (numberTroca[index] % 3 === 0) {
      numberTroca[index] = 'fizz';
    }
  }
 //verifica se é divisível por cinco e substitui
  for (let index2 = 0; index2 < numberTroca.length; index2 += 1) {
    if (numberTroca[index2] % 5 === 0) {
       numberTroca[index2] = 'buzz';
    }
  }
 //verifica se é divisível por três e cinco e substitui
  for (let index3 = 0; index3 < numberTroca.length; index3 += 1) {
    if (numberTroca[index3] % 3 === 0 && numberTroca[index3] % 5 === 0) {
      numberTroca[index3] = 'fizzBuzz';
    } else {
      numberTroca[index3] = 'bug!'; 
    }
  }
return numberTroca;
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
