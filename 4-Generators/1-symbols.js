// Symbols

const uniqueId = Symbol();

console.log(uniqueId);

const obj = {
  [uniqueId]: "Hello",
};

console.log(obj);

console.log(Object.keys(obj)); // não retornará o valor

console.log(Object.getOwnPropertySymbols(obj));

// Well known symbols

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const obj2 = {
  [Symbol.iterator]() {},
};

console.log(Array.prototype);

// ex:
const arr = [1, 2, 3, 4];

// Antes do ECMA6
const it = arr[Symbol.iterator]();

while (true) {
  let { value, done } = it.next();

  if (done) {
    break;
  }

  console.log(value);
}

// Com ECMA6
for (let value of arr) {
  console.log(value);
}

console.log(itAgain.next());
console.log(itAgain.next());
console.log(itAgain.next());
console.log(itAgain.next());
console.log(itAgain.next());
