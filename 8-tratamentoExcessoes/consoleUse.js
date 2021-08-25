// Console

console.log("Black text");
console.warn("Yellow text with alert");
console.error("Red error text");

console.trace();

console.group("My group");
console.log("Info inside group");
console.log("More info inside group");
console.groupEnd("My group");

console.time("Log Time");
setTimeout(() => {
  console.timeEnd("Log time");
}, 2000);

console.table(["Carlos Lima", "Digital Innovation One"]);
/* Resultado:
┌─────────┬──────────────────────────┐
│ (index) │          Values          │
├─────────┼──────────────────────────┤
│    0    │      'Carlos Lima'       │
│    1    │ 'Digital Innovation One' │
└─────────┴──────────────────────────┘
*/

const pessoa = {
  nome: "Carlos",
  idade: 34,
  cor: "parda",
};

console.table(pessoa);

/* Resultado:
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│  nome   │ 'Carlos' │
│  idade  │    34    │
│   cor   │ 'parda'  │
└─────────┴──────────┘
*/

console.assert(1 === 0, "Ops!");

// personalizando console
console.log("%c styled log", "color: blue; font-size: 24px");
