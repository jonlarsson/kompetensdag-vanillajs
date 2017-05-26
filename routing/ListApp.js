(function () {

  class ListApp extends HTMLElement {
    constructor() {
      super();

      window.addEventListener("hashchange", e => this.render(e.newURL))
    }

    connectedCallback() {
      this.render(document.location.hash);
    }

    render(path) {
      if (this.firstChild) {
        this.removeChild(this.firstChild);
      }

      const master = document.createElement("op-master");
      const detail = document.createElement("op-detail");

      if (path.match(/\/detail\/([0-9]+)/)) {
        const match = path.match(/\/detail\/([0-9]+)/);
        const id = match[1];
        detail.render(id);
        this.appendChild(detail);
      } else {
        master.render();
        this.appendChild(master);
      }
    }
  }
  window.customElements.define("op-list-app", ListApp)
})();