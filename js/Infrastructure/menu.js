import { SearchKey } from "./SearchKey.js";


export let urlMenu = "../json/menu.json";
var ruta = []; //  buffer global de ruta y claves para carga de ficheros.
var opt = []; //  buffer contenedor.
let cruta = 0; //  contador de divisores.
let initbool = "true"; //  fix carga diferida de nivel.

function menu() {
  // devShow();
  setOnScreen(menuList, "app");
}



export function devShow(menu) {
  return new Promise((resolve) => {
    var route = [];
    var options = new SearchKey(menu, route);
    

    route.push(options[0]);

    options = new SearchKey(menu, route);
    

    route.push(options[1]);
    options = new SearchKey(menu, route);

    route.push(options[2]);
    options = new SearchKey(menu, route);
    resolve();
  });
}

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

function valuesOfId(val) {
  if (val != "") {
    for (let index = 0; index < val.length; index++) {
      if (document.getElementById(val[index]).value == val[index]) {
        return index;
        break;
      }
    }
  } else {
    alert("No se puede mostrar conetenido del menu.");
  }
}

export function launchTest() {
  alert("Se lanza la funcion de carga por pantalla de X ejercicio.");
}
