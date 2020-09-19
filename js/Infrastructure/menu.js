import { SearchKey } from "./SearchKey.js";


var ruta = []; //  buffer global de ruta y claves para carga de ficheros.
var opt = []; //  buffer contenedor.
let cruta = 0; //  contador de divisores.


export function onClickMenu(key, menu) {
  if (key == "") {
    var option = new SearchKey(menu, ruta);
    opt.push(option);
    document.getElementById("app").innerHTML +=
      `<br><div id='cat-` + cruta + `' name='` + cruta + `'></div><br>`;
    writeOnScreen(option, "cat-" + cruta);
  } else {
    document.getElementById("app").innerHTML +=
      `<br><div id='cat-` + cruta + `' name='` + cruta + `'></div><br>`;
    writeOnScreen(nextValueOf(key, menu), "cat-" + cruta);
  }
}

function nextValueOf(key, menu) {
  ruta.push(key);
  var option = new SearchKey(menu, ruta);

  if (option == "") {
    //alert("Este arbol no tiene mas ramas.");
    document.getElementById(
      "app"
    ).innerHTML += `<input type='button' class='btn btn-primary btn-lg launchTest' id="chisclander" value='lanzar prueba'\>`;
    return option;
  } else {
    return option;
  }
}

function writeOnScreen(valor, id) {
  for (let i = 0; i < valor.length; i++) {
    document.getElementById(id).innerHTML +=
      `<input type='button' id='boton` +
      cruta +
      "_" +
      i +
      `'class='btn btn-primary btn-lg btnMenu' id="` +
      valor[i] +
      `" value='` +
      valor[i] +
      `' data='` +
      valor[i] +
      `' \>`;
  }
  cruta++;
}

