function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min); //gerando tempo randonizado
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    /* resolve: resolve o código se ele tiver sido executado com sucesso;
       reject: rejeita o erro no código
     */
    if (typeof msg !== "string") reject(new Error("ERRO")); // vai cair no catch()

    setTimeout(() => {
      console.log(msg); // só será executada após decorrido o tempo
      resolve(msg); // enviando mensagem única no resolve
    }, tempo); // tempo enviado para a função setTimeout
  }); // função promise
}

esperaAi("Conexão com o DB", aleatorio(1, 3))
  .then((resposta) => {
    // será enviado como argumento para o resolve
    console.log(resposta);
    return esperaAi("Buscando dados do DB", aleatorio(1, 3)); // outra promise
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(22222, aleatorio(1, 3));
  })
  .then((resposta) => {
    // exibe a promise acima
    console.log(resposta);
  })
  .then(() => {
    console.log("Exibindo dados na tela");
  })
  .catch((e) => {
    console.log("ERRO", e);
  });

/*  then: será executado sempre que chamarmos o resolve();
    catch: captura o erro. Será executado sempre que chamarmos o reject()

    the equivale ao try;
    catch equivale ao catch mesmo.

    também pode ser comparado ao if e ao else
*/
