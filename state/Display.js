(function () {
  class Display extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.unsubscribe = APP.store.subscribe(() => {
        this.render(APP.store.getState());
      });
      this.render(APP.store.getState());
    }

    disconnectedCallback() {
      this.unsubscribe();
    }

    render(count) {
      if (!this.firstChild) {
        this.appendChild(document.createTextNode("" + count))
      } else {
        this.firstChild.textContent = "" + count;
      }
    }
  }
  window.customElements.define("op-display", Display)
})();