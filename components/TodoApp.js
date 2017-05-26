(function () {
  class TodoApp extends HTMLElement {
    constructor(props) {
      super(props);

      this.state = {items: [], text: ""};
    }

    connectedCallback() {
      this.init()
    }

    removeAllChildren() {
      while (this.firstChild) {
        this.removeChild(this.firstChild);
      }
    }

    init() {
      const div = document.createElement("div");

      const h3 = document.createElement("h3");
      h3.appendChild(document.createTextNode("TODO"));

      const form = document.createElement("form");
      const input = this.input || document.createElement("input");
      input.value = this.state.text;
      const button = document.createElement("button");
      const buttonText = document.createTextNode("");
      button.appendChild(buttonText);
      form.appendChild(input);
      form.appendChild(button);

      const todoList = document.createElement("op-todo-list");

      div.appendChild(h3);
      div.appendChild(form);
      div.appendChild(todoList);

      todoList.render(this.state.items);

      const render = () => {
        todoList.render(this.state.items);
        buttonText.textContent = "Add #" + (this.state.items.length + 1);
        input.value = this.state.text;
      };
      render();

      todoList.addEventListener("op-remove-item", e => {
        this.state.items.splice(e.detail, 1);
        render();
      });

      form.addEventListener("submit", e => {
        e.preventDefault();

        this.state.items.push({id: Date.now(), text: input.value});
        this.state.text = "";

        render();
      });

      this.appendChild(div);
    }
  }
  customElements.define('op-todo-app', TodoApp);
})();