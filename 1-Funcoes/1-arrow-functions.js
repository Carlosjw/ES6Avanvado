// função padrão

function soma(d, e) {
  return d + e;
}

console.log(soma(6, 4));

// Funcao anônima: precisa estar
// atrelada a uma variável
var soma2 = function (a, b) {
  return a + b;
};

console.log(soma2(5, 7));

// Arrow functions
var soma3 = (a, b) => a + b; // não necessita de chaves
console.log(soma3(5, 15));

// exemplo 2:
var soma4 = (f, g) => {
  // precisa das chaves
  var x = 10;

  if (f > g) {
  }
  return f + g;
};

console.log(soma4(5, 15));

// exemplo 3: somente com um argumento:
var dec = (k) => k * 10;
console.log(dec(15));

// return implícito de um objeto
var creatObj = () => ({ test: 123 });
console.log(creatObj());

// Gerando objeto com função construtora:
function Car() {
  this.foo = "bar";
}

console.log(new Car());
