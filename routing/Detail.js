(function () {
  class Detail extends HTMLElement {
    static get observedAttributes() {
      return ['detail-id'];
    }

    constructor() {
      super();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "detail-id") {
        this.render(newValue);
      }
    }

    init() {
      if (this.detailText) return;
      const a = document.createElement("a");
      a.setAttribute("href", "#/");
      a.appendChild(document.createTextNode("Tillbaka"));

      const p = document.createElement("p");
      const detailText = document.createTextNode("");
      p.appendChild(detailText);

      this.appendChild(a);
      this.appendChild(p);

      this.detailText = detailText;
    }

    render(detailId) {
      this.init();

      this.detailText.textContent = "Detaljer för " + detailId;
    }
  }
  window.customElements.define("op-detail", Detail)
})();