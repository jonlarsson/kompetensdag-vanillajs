(function () {
  class TodoList extends HTMLElement {
    constructor() {
      super();
    }

    init() {
      if (this.ul) return;
      this.ul = document.createElement("ul");
      this.appendChild(this.ul);
    }

    render(items) {
      this.init();
      for (let i = this.ul.children.length; i < items.length; i++) {
        const li = document.createElement("li");
        const itemElement = document.createElement("op-todo-item");

        itemElement.addEventListener("op-remove-click", e => {
          const event = new CustomEvent("op-remove-item", {detail: i});
          this.dispatchEvent(event);
        });

        li.appendChild(itemElement);
        this.ul.appendChild(li);
      }

      const childrenToRemove = [].slice.call(this.ul.children, items.length, this.ul.children.length);
      childrenToRemove.forEach(child => this.ul.removeChild(child));

      items.forEach((item, index) => {
        const li = this.ul.children[index];
        li.firstChild.render(item.text);
      });
    }
  }

  window.customElements.define("op-todo-list", TodoList)
})();
