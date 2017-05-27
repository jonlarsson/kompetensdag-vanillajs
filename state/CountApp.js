(function () {
  class CountApp extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
    }

    render() {
      if (this.firstChild) return;

      const controls = document.createElement("op-controls");
      const display = document.createElement("op-display");

      controls.render();

      this.appendChild(controls);
      this.appendChild(document.createTextNode(" => "))
      this.appendChild(display);
    }
  }
  window.customElements.define("op-count-app", CountApp)
})();