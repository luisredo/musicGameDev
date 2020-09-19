import { SearchKey } from "./SearchKey.js";

export class Menu {
  #ruta = [];
  #opt = [];
  #cruta = 0;

  constructor(ruta){
    this.#ruta = ruta;
  }

  

    

  onClickMenu(key, menu) {
    if (key == "") {
      var option = new SearchKey(menu, this.#ruta.get());
      this.#opt.push(option);
      var app = document.querySelector("#app");

      var div = document.createElement("div");
      div.setAttribute("id", "cat-" + this.#cruta);
      div.setAttribute("name", this.#cruta);

      app.appendChild(div);

      this.writeOnScreen(option, "cat-" + this.#cruta);
    } else {
      var app = document.querySelector("#app");

      var div = document.createElement("div");
      div.setAttribute("id", "cat-" + this.#cruta);
      div.setAttribute("name", this.#cruta);

      app.appendChild(div);

      this.writeOnScreen(this.nextValueOf(key, menu), "cat-" + this.#cruta);
    }
  }

  nextValueOf(key, menu) {
    this.#ruta.add(key);
    debugger;
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
    for (let i = 0; i < valor.length; i++) {
      var element = document.getElementById(id);

      var button = document.createElement("button");
      button.setAttribute("id", "boton" + this.#cruta + "_" + i);
      button.setAttribute("class", "btn btn-primary btn-lg btnMenu");
      button.setAttribute("data", valor[i]);

      var text = document.createTextNode(valor[i]);

      button.appendChild(text);

      element.appendChild(button);
    }
    this.#cruta++;
  }
  
  
}
