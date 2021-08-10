// ANTES DO ECMA6
function sum(a, b) {
  var value = 0;

  for (var i = 0; i < arguments.length; i++) {
    value += arguments[i];
  }
  return a + b;
}

console.log(sum(5, 5, 5, 2, 3));

// rest operator ...
function soma(...args) {
  return args.reduce((acc, value2) => acc + value2, 0);
}

console.log(soma(5, 5, 5, 2, 3));

// exe 2:
const soma4 = (a, b, ...rest) => {
  console.log(a, b, rest);
};

console.log(soma4(5, 5, 5, 2, 3));

const multiply = (...args) => args.reduce((accs, values) => accs * values, 1);

// soluçao antes do ECMA6
const sum2 = (...rest2) => {
  return multiply.apply(undefined, rest2);
};

console.log(sum2(5, 5, 5, 2, 3));
