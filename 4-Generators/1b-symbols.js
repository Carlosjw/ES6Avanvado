// iterando sobre objeto com Symbol e iterator
const obj = {
  values: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let i = 0;

    return {
      next: () => {
        i++;

        return {
          value: this.values[i - 1],
          done: i > this.values.length,
        };
      },
    };
  },
};

const itAgain = obj[Symbol.iterator]();

// agora iterável com for of
for (let value of obj) {
  console.log(value);
}

// com spread
const arr = [...obj];

console.log(arr);
