// Async / Await

const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12345);
    }, 1000);
  });

/* Processamento assíncrono sequencial
const simpleFunc = async () => {
  const data = await asyncTimer();
  console.log(data);
  const dataJSON = await fetch("./data.json").then((resStream) =>
    resStream.json()
  );

  return dataJSON;
}; */

// Processamento de maneira paralela
const simpleFunc = async () => {
  const data = await Promise.all([
    asyncTimer(),
    fetch("./data.json").then((resStream) => resStream.json()),
  ]);

  return data;
};

simpleFunc()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Erro!", err);
  });
