export class MusicGameView {
  #container = null;
  constructor() {
    this.#container = document.getElementById("musicGame");
  }
  printHTML(elementUI) {
    this.#container.append(elementUI);
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
    textElements.forEach((element) => {
      if (specialCharsArray.includes(element.text)) {
        var fixed = this.specialChars(element.text);
        div.appendChild(fixed);
      } else {
        if (element.tag == false) {
          var span = document.createElement("span");
          span.textContent = element.text;
          span.className = "wordElement";
          span.style.color = "red";
          div.append(span);
        } else {
          var input = document.createElement("input");
          input.textContent = element.text;
          input.className = "wordElement";
          input.style.color = "black";
          div.append(input);
        }
        var fixed = this.specialChars(element.text);
        div.appendChild(fixed);
      }
    });
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
