// Others new Generators Exemples

const obj = {
  values: [1, 2, 3, 4],
  *[Symbol.iterator]() {
    for (var i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  },
};

for (let value of obj) {
  console.log(value);
}
