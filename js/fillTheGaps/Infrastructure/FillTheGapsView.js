export class FillTheGapsView {
  #container = null;
  constructor() {
    this.#container = document.getElementById("fillTheGaps");
  }
  printHTML(elementUI) {
    this.#container.append(elementUI);
  }
  clean(className) {
    document.querySelector(className).innerHTML = "";
  }
  blankId(className) {
    document.getElementById(className).innerHTML = "";
  }
  welcomePage() {
    var text = document.createTextNode("Bienvenido a fill the gaps.");
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
    toCorrect.setAttribute("id", "toCorrect");
    toCorrect.setAttribute("value", "Corregir");
    return toCorrect;
  }

  exercise() {
    var exercise = document.createElement("div");
    iframeUI.setAttribute("class", "exercise");
    return exercise;
  }

  iframeYoutube(url) {
    var div = document.createElement("div");
    div.setAttribute("class", "center");
    var iframeUI = document.createElement("iframe");
    iframeUI.setAttribute("frameborder", "0");
    iframeUI.setAttribute("class", "youtube");
    iframeUI.setAttribute("style", "display:block");
    iframeUI.setAttribute("src", "https://www.youtube.com/embed/" + url);
    div.append(iframeUI);
    return div;
  }

  getSound(url) {
    var audio = document.createElement("audio");
    audio.setAttribute("class","audio");
    audio.setAttribute("style","display:block");
    audio.setAttribute("src",url);
    return audio;
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
    for (var i = 0; i < textElementsCount - 1; i++) {
      var element = textElements[i];
      var nextElement = textElements[i + 1];
      if (element.tag === true) {
        var input = document.createElement("input");
        input.setAttribute("data-response", element.text);
        input.className = "wordElement";
        input.style.color = "black";
        input.setAttribute("type", "text");
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

      try {
        if (!specialCharsArray.includes(nextElement.text)) {
          div.appendChild(fixed);
        }
      } catch (error) {
        console.log(error);
      }
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
