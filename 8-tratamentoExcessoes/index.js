class CustomError extends Error {
  constructor({ message, data }) {
    super(message);
    this.data = data;
  }
}

try {
  const name = "Carlos Lima";
  const myError = new CustomError({
    message: "Custom message on custom error",
    data: {
      type: "Server Error",
    },
  });

  throw myError;
} catch (err) {
  console.log("Error: ", err); // ReferenceError: Cannot access 'name' before initialization
  console.log(err.data);
} finally {
  // executando código mesmo com erro
  console.log("Keep doing... ");
}
