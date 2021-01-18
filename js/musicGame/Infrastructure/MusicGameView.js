export class MusicGameView {
  #container = null;
  constructor() {
    this.#container = document.getElementById("musicGame");
  }
  printHTML(elementUI) {
    this.#container.append(elementUI);
  }
  clean(className){
    document.querySelector(className).innerHTML = "";
  }
  welcomePage() {
    var text = document.createTextNode("Bienvenido a musicgame.");
    this.#container.append(text);
  }

  mediaPlayer(video) {
    const vid = document.createElement("div");
    vid.id = "media";
    this.#container.append(vid);
    this.insertMedia(video);
  }

  toCorrect() {
    var toCorrect = document.createElement("input");
    toCorrect.setAttribute("type", "button");
    toCorrect.setAttribute("id","toCorrect");
    toCorrect.setAttribute("value","Corregir");
    return toCorrect;
  }

  exercise() {
    var exercise = document.createElement("div");
    iframeUI.setAttribute("class", "exercise");
    return exercise;
  }

  iframeYoutube(url) {
    var iframeUI = document.createElement("iframe");
    iframeUI.setAttribute("class", "btn btn-primary btn-lg btn-block");
    iframeUI.setAttribute("style", "display:block");
    iframeUI.setAttribute("src", "https://www.youtube.com/embed/" + url);
    return iframeUI;
  }
  insertMedia(video) {
    document.getElementById("media").innerHTML =
      `<div><iframe class="btn btn-primary btn-lg btn-block" width="560" height="315" src="https://www.youtube.com/embed/` +
      video +
      `"  allowfullscreen></iframe>`;
  }

  showText(textElements) {
    const div = document.createElement("div");
    div.className = "textElements";
    var specialCharsArray = [",", ".", "\\n"];
    var textElementsCount = textElements.length;
    for (var i=0; i < textElementsCount; i++) {
      var element = textElements[i];
      var nextElement = textElements[i+1];
      if (element.tag === true) {
        var input = document.createElement("input");
        input.setAttribute("data-response", element.text);
        input.className = "wordElement";
        input.style.color = "black";
        input.setAttribute("type","text");
        div.append(input);
        continue;
      }
      var fixed = this.specialChars(element.text);
      if (specialCharsArray.includes(element.text)) {
        div.appendChild(fixed);
        continue;
      }
      var span = document.createElement("span");
      span.textContent = element.text;
      span.className = "wordElement";
      span.style.color = "red";
      div.append(span);
      if (!specialCharsArray.includes(nextElement.text)) {
        div.appendChild(fixed);
      }
      //debugger;
    }
    return div;
  }

  specialChars(expression) {
    switch (expression) {
      case "\\n":
        var p = document.createElement("p");
        return p;
        break;
      case ",":
        var character = document.createTextNode(", ");
        return character;
        break;
      case ".":
        var character = document.createTextNode(".");
        return character;
        break;
      default:
        var character = document.createTextNode(" ");
        return character;
        break;
    }
  }
}
