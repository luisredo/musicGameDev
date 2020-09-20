import { SearchKey } from "./SearchKey.js";

export class Menu {
  #ruta = [];
  #opt = [];
  #cruta = 0;

  constructor(ruta) {
    this.#ruta = ruta;
  }

  onClickMenu(key, menu) {
    if (key == "") {
      var option = new SearchKey(menu, this.#ruta.get());
      this.#opt.push(option);
      this.#print();
      this.writeOnScreen(option, "cat-" + this.#cruta);
    } else {
      this.#print();
      this.writeOnScreen(this.nextValueOf(key, menu), "cat-" + this.#cruta);
    }
  }

  #print() {
    var app = document.querySelector("#app");

    var div = document.createElement("div");
    div.setAttribute("id", "cat-" + this.#cruta);
    div.setAttribute("name", this.#cruta);

    app.appendChild(div);
  }

  nextValueOf(key, menu) {
    this.#ruta.add(key);
    var option = new SearchKey(menu, this.#ruta.get());

    if (option == "") {
      var app = document.querySelector("#app");

      var button = document.createElement("button");
      button.setAttribute("class", "btn btn-primary btn-lg launchTest");
      button.setAttribute("id", "chisclander");

      var text = document.createTextNode("lanzar prueba");

      button.appendChild(text);

      app.appendChild(button);
      return option;
    } else {
      return option;
    }
  }

  writeOnScreen(valor, id) {
    var element = document.getElementById(id);
    var div = document.createElement("div");
    for (let i = 0; i < valor.length; i++) {
      var button = document.createElement("button");
      button.setAttribute("id", "boton" + this.#cruta + "_" + i);
      button.setAttribute("class", "btn btn-primary btn-lg btnMenu");
      button.setAttribute("data", valor[i]);

      var text = document.createTextNode(valor[i]);

      button.appendChild(text);

      div.appendChild(button);
    }
    element.appendChild(div);
    this.#cruta++;
  }
}
