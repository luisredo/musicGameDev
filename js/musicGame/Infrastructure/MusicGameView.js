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

    mediaPlayer(video){
        const vid = document.createElement("div");
        vid.id = "media";
        this.#container.append(vid);
        this.insertMedia(video);
    }

    insertMedia(video){
        document.getElementById("media").innerHTML = 
        `<div><iframe class="btn btn-primary btn-lg btn-block" width="560" height="315" src="https://www.youtube.com/embed/`
        + video +`"  allowfullscreen></iframe>`;
    }

    showText(textElements){
        const div = document.createElement("div");
        div.className = "textElements";
        this.#container.append(div);

        textElements.forEach(element => {

            var span = document.createElement("span");
            span.textContent = element;
            span.className = "wordElement";
            span.style.color = "red";
            div.append(span);
            
            this.fixSpaceValue(element,div);
            
        });
    }

    fixSpaceValue(expression,father){
        switch(expression) {
            case '\n':
                var p = document.createElement("p") 
                p.textContent = "";
                father.append(p);
                break ;
            case ',':
                var span = document.createElement("span");
                span.textContent = ", ";
                father.append(span);
                break ;
            case '.':
                var span = document.createElement("span");
                span.textContent = ".";
                father.append(span);
                break ;
            default:
                var span = document.createElement("span");
                span.textContent = " ";
                father.append(span);
                break ;
          }
    }
}