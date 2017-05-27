(function () {

  class Master extends HTMLElement {

    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
    }

    render() {
      if (this.firstChild) return;

      const ul = document.createElement("ul");

      const createLi = id => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", "#/detail/" + id);
        a.appendChild(document.createTextNode("Item " + id));
        li.appendChild(a);
        return li;
      };

      ul.appendChild(createLi(1));
      ul.appendChild(createLi(2));
      ul.appendChild(createLi(3));

      this.appendChild(ul);
    }
  }

  window.customElements.define("op-master", Master)
})();