class app {
  constructor() {
    this.bind();
  }

  bind() {
    document.querySelector(".add-button").addEventListener("click", () => {
      this.handleClick(1);
    });

    debugger;
    document.querySelector(".sub-button").addEventListener("click", () => {
      this.handleClick(-1);
    });
  }

  handlClick(val) {
    const counterEl = document.querySelector(".counter");
    const value = parseInt(counterEl.innerText);

    counterEl.innerText = value + val;
  }
}

new app();
