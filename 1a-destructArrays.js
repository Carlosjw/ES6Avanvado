// tradicional
var arr = ["Apple", "Banana", "Orange", ["Tomato"]];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

// Destructuring Assignment
var [apple2, banana2, orange2, [tomato2]] = [
  "Apple",
  "Banana",
  "Orange",
  ["tomato"],
];

console.log(apple, apple2);

