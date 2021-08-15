// Generators

function hello() {
  console.log("Hello");
  console.log("From");
  console.log("Function");
}

hello();

// Com Generators
function* hello2() {
  console.log("Hello");
  yield 1;
  console.log("From");

  const value = yield 2;
  console.log(value);
}

const it = hello2();

console.log(it.next());
console.log(it.next());
console.log(it.next("Outside"));

// other generators exemples
function* naturalNumbers() {
  let number = 0;

  while (true) {
    yield number;
    number++;
  }
}

const otherIt = naturalNumbers();

console.log(otherIt.next());
console.log(otherIt.next());
console.log(otherIt.next());
console.log(otherIt.next());
