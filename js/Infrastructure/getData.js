import { API } from "./API.js";

const API_URL = "http://api.gameoftesla.com/v1/text/";
let buffer = [];
export let menuList = [];

export function cargarBuffer() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    let myObj = [];
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(this.responseText);
      document.getElementById("app").innerHTML = "";
      document.getElementById("contenido").innerHTML = "";
      for (let i = 0; i < myObj.length; i++) {
        buffer[i] = myObj[i];
        recorrerTags(i);
      }
    }
  };
  xmlhttp.open("GET", API_URL, true);
  xmlhttp.send();
}

function recorrerTags(index) {
  let lang = buffer[index].tags[0].tags[0];
  let type = buffer[index].tags[0].tags[1];
  for (let x = 0; x < buffer[index].split[0].tags.length; x++) {
    
    document.getElementById("contenido").innerHTML +=
      `<p><input type="button" class="btn btn-primary btn-lg btn-block showin" showin="` +
      index +
      `" value="texto nº ` +
      index +
      ` | tag: ` +
      buffer[index].split[0].tags[x] +
      ` |  titulo: ` +
      buffer[index].title[0].title +
      ` | ` +
      buffer[index].tags[0].tags[0] +
      ` | ` +
      buffer[index].tags[0].tags[1] +
      `"></input></p>`;
  }
}

function tagsOnButtons(tag, index) {
  document.getElementById("app").innerHTML +=
    `<p><input type="button" value="titulo: ` +
    tag +
    ` onclick="` +
    mostrar(index) +
    `" \ ></p>`;
}

export function showIn(index) {
  document.getElementById("contenido").innerHTML = "";
  document.getElementById("app").innerHTML =
    `<span>` + buffer[index].title[0].title + "</span> <br><br>";

  for (let i = 0; i < buffer[index].split.length; i++) {
    if (buffer[index].split[i].text == "\\n") {
      document.getElementById("app").innerHTML += `<br>`;
    } else {
      document.getElementById("app").innerHTML +=
        `<span>` + buffer[index].split[i].text + ` </span>`;
    }
  }
}
