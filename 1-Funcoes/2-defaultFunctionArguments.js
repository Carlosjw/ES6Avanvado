/*
    Atribuir valores padrão a parametros de funções
    caso nao seja fornecido pelo programador/usuário
*/
function multiply(a = 2, b = 3) {
  // outra possiblidade (a, b = a )
  return a * b;
}

console.log(multiply(undefined, 5)); // 10
console.log(multiply(3, undefined)); // 9
console.log(multiply()); // 6

// Passando números randônicamente
function randomNumber() {
  return Math.random() * 10;
}

function multiply2(a, b = randomNumber()) {
  return a * b;
}
