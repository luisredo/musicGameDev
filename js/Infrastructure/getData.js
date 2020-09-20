import { API } from "./API.js";

const API_URL = "http://api.gameoftesla.com/v1/text/";
let buffer = [];
export let menuList = [];

export async function cargarBuffer() {
  var texts = await new API().get(API_URL);
  elementClean("#app");
  elementClean("#contenido");
  var numberOfTexts = texts.length;
  for (let text = 0; text < numberOfTexts; text++) {
    buffer[text] = texts[text];
    recorrerTags(text);
  }
}

function elementClean(element) {
  return (document.querySelector(element).innerHTML = "");
}

function recorrerTags(index) {
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
