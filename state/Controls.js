(function () {
  class Controls extends HTMLElement {
    constructor() {
      super();
    }

    render() {
      if (this.firstChild) return;

      const add = document.createElement("button");
      add.appendChild(document.createTextNode("+1"));

      const subtract = document.createElement("button");
      subtract.appendChild(document.createTextNode("-1"));

      add.addEventListener("click", e => {
        e.preventDefault();
        APP.store.dispatch({type: "ADD"});
      });

      subtract.addEventListener("click", e => {
        e.preventDefault();
        APP.store.dispatch({type: "SUBTRACT"});
      });

      this.appendChild(add);
      this.appendChild(subtract);
    }
  }

  window.customElements.define("op-controls", Controls)
})();