// Promises
const doSomethingPromise = () =>
  new Promise((resolve, reject) => {
    throw new Error("Something went wrong");
    setTimeout(function () {
      // did doSomething
      resolve("First data");
    }, 1000);
  });

const doOtherthingPromise = () =>
  new Promise((resolve, reject) => {
    throw new Error("Oops");
    setTimeout(function () {
      // did doSomething
      resolve("Second data");
    }, 1000);
  });

//   Processamento em paralelo
Promise.all([doSomethingPromise(), doOtherthingPromise()])
  .then((data) => {
    console.log(data[0].split(""));
    console.log(data[1].split(""));
  })
  .catch((err) => {
    console.log(err);
  });

// Processamento sequencial
doSomethingPromise()
  .then((data) => {
    console.log(data.split(""));
    return doOtherthingPromise();
  })
  .then((data2) => console.log(data2.split("")))
  .catch((error) => console.log("Ops", error));

//   Retorno da promise que resolver primeiro
Promise.race([doSomethingPromise(), doOtherthingPromise()]).then((data) => {
  console.log(data);
});
