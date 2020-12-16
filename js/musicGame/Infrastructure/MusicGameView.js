export class MusicGameView {
    #container = null;
    constructor(){
        this.#container = document.getElementById("musicGame");
        return this.welcomePage();
    }
    welcomePage(){
        var text = document.createTextNode("Bienvenido a musicgame.");
        this.#container.append(text);
    }
}