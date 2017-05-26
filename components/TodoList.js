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
        li.appendChild(document.createTextNode(""));
        this.ul.appendChild(li);
      }

      [].slice.call(this.children, items.length, this.ul.children.length).forEach(child => this.ul.removeChild(child));

      items.forEach((item, index) => {
        const li = this.ul.children[index];
        li.firstChild.textContent = item.text;
        li.setAttribute("key", item.key);
      });
    }
  }

  window.customElements.define("op-todo-list", TodoList)
})();
