const obj = {
  test: 123,
};

const obj2 = {
  ...obj,
  teste2: "Hello",
};

const objectMerged = {
  ...obj,
  ...obj2,
};
console.log(objectMerged);

const obj3 = {
  test: 123,
  subObj: {
    test: 123,
  },
};

const obj4 = { ...obj3, subObj: { ...obj3.subObj } };

obj4.subObj.test = 456;

console.log(obj3);
