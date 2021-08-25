class Math {
  /*  sum(a, b) {
      return a + b;
    } */
  // Assíncrono
  sum(a, b, callback) {
    setTimeout(() => {
      callback(a + b);
    }, 5);
  }
  multiply(a, b) {
    //const result = a * b;
    // return result;

    // Refatorando:
    return a * b;
  }
}

module.exports = Math;
