(function () {
  class TodoItem extends HTMLElement {
    constructor() {
      super();
    }

    init() {
      if (this.textNode) return;

      this.textNode = document.createTextNode("");
      const removeButton = document.createElement("button");
      removeButton.appendChild(document.createTextNode("X"));

      removeButton.addEventListener("click", e => {
        e.preventDefault();
        const event = new Event("op-remove-click");
        this.dispatchEvent(event);
      });

      this.appendChild(this.textNode);
      this.appendChild(removeButton);
    }

    render(text) {
      this.init();

      this.textNode.textContent = text;
    }
  }

  customElements.define('op-todo-item', TodoItem);
})();