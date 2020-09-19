import { SearchKey } from "./SearchKey.js";

var ruta = []; //  buffer global de ruta y claves para carga de ficheros.
var opt = []; //  buffer contenedor.
let cruta = 0; //  contador de divisores.

export function onClickMenu(key, menu) {
  if (key == "") {
    var option = new SearchKey(menu, ruta);
    opt.push(option);
    var app = document.querySelector("#app");

    var div = document.createElement("div");
    div.setAttribute("id", "cat-" + cruta);
    div.setAttribute("name", cruta);

    app.appendChild(div);

    writeOnScreen(option, "cat-" + cruta);
  } else {
    var app = document.querySelector("#app");

    var div = document.createElement("div");
    div.setAttribute("id", "cat-" + cruta);
    div.setAttribute("name", cruta);

    app.appendChild(div);

    writeOnScreen(nextValueOf(key, menu), "cat-" + cruta);
  }
}

function nextValueOf(key, menu) {
  ruta.push(key);
  var option = new SearchKey(menu, ruta);

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

function writeOnScreen(valor, id) {
  for (let i = 0; i < valor.length; i++) {
    var element = document.getElementById(id);

    var button = document.createElement('button');
    button.setAttribute('id', 'boton'+cruta+'_'+ i);
    button.setAttribute('class', 'btn btn-primary btn-lg btnMenu');
    button.setAttribute('data', valor[i]);

    var text = document.createTextNode(valor[i]);

    button.appendChild(text);

    element.appendChild(button);
  }
  cruta++;
}
