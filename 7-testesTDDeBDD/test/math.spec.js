const assert = require("assert");
const Mocha = require("./src/math.js");

describe("Math class", function () {
  // hooks: beforeEach, after
  beforeEach(function () {
    value = 0;
  });

  it("Sum two numbers", function (done) {
    const math = new Math();
    this.timeout(3000);

    value = 5;

    /*try {
      assert.equal(math.sum(5, 5), 10); // verifica se 5 e 5 é 10
    } catch (err) {
      console.log(err);
    }*/
    math.sum(5, 5, (value) => {
      assert.equal(value, 10);
      done();
    });
  });

  it.only("Multiply two numbers", function () {
    const math = new Math();

    assert.equal(math.multiply(5, 5), 25);
  }); // apenas este test será
  //executado (função only)

  /*
    Para ignorar um teste poderia usar o método
    skyp. Ex: it.skyp
  */
});
