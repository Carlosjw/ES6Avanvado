const assert = require("assert"); // Mocha
const Math = require("./src/math.js");
const expect = require("chai").expect; // Chai
const sinon = require("sinon"); // sinon

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
      // assert.equal(value, 10); // com Mocha
      expect(value).to.equal(10);
      done();
    });
  });

  it.only("Multiply two numbers", function () {
    const math = new Math();
    const obj = {
      name: "Carlos Lima",
    };

    const obj2 = {
      name: "Carlos Lima",
    };

    expect(obj).to.deep.equal(obj2); // comparando valores de objetos

    // expect(obj).to.have.property("name").equal("Carlos Lima"); // validando propriedade de objeto

    // assert.equal(math.multiply(5, 5), 25); // com Mocha
    // expect(math.multiply(value, 5)).to.equal(0); // com Chai
  }); // apenas este test será
  //executado (função only)

  /*
    Para ignorar um teste poderia usar o método
    skyp. Ex: it.skyp
  */

  it.only("Calls res with sum and index values", function () {
    const req = {};
    const res = {
      // load: sinon.spy(), // função espiã
      load: function () {
        console.log("Called!");
      },
    };

    // sinon.spy(res, "load");
    sinon.stub(res, "load").returns("xpto");

    const math = new Math();

    math.printSum(req, res, 5, 5);

    // res.restore();

    // expect(res.load.calledOnce).to.be.true;
    expect(res.load.args[0][1]).to.equal(10);
  });
});
