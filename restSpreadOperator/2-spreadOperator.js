// SPREAD OPERATOR
const multiply = (...args) => args.reduce((accs, values) => accs * values, 1);

const sum = (...rest) => {
  return multiply(...rest);
};

console.log(sum(5, 5, 5, 2, 3));

// rest operator: ListeningStateChangedEvent, strings, arrays, leiteral objects e iterable objects

// spread de strings
const str = "Digital Innovation One";

function logArgs(...args2) {
  console.log(args2);
}

logArgs(...str);

// spread de arrays
const arr = [1, 2, 3, 4, 5];

function consoArgs(a, b, c, ...rest) {
  console.log(a, b, c, rest);
}

consoArgs(...arr);

// juntando elementos do array com spreadOperator

const arr2 = [...arr, 5, 6, 7];
const arr3 = [...arr, ...arr2, 0, 0, 0];

console.log(arr2);
console.log(arr3);

// clonando arrays com spread
const arrClone = [...arr];
console.log(arrClone);
