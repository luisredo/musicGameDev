import { Ruta } from "./Ruta.js";
import { SearchKey } from "./SearchKey.js";
export class Menu {
    #ruta = [];
    #opt = [];
    #dir = [];

    constructor(ruta, dir) {
        this.#ruta = ruta;
        this.#dir = dir;
    }

    onClickMenu(key, menu, dir) {
        if (document.getElementById("inicio") != undefined) document.getElementById("inicio").remove();
        try {
            if (key == "") {
                var option = new SearchKey(menu); //this.#ruta.get());
                this.writeOnScreen(option, "app");
            } else {
                this.writeOnScreen(this.nextValueOf(key, menu), "app");
            }
        } catch (err) {
            let url = this.#dir.split(",");
            url.shift();
            this.#ruta = url;
            alert("err lista  " + url);
            document.getElementById("app").innerHTML = "";

            let dir = [];
            for (var i = 0; i < url.length; i++) {
                var option = new SearchKey(menu, dir);
                this.#dir = dir;
                this.writeOnScreen(option, "app");
                dir.push(url[i]);
            }
            console.log(err.message);
        }

    }

    #print() {
        var app = document.querySelector("#app");
        var div = document.createElement("div");
        div.setAttribute("id", "");
        div.setAttribute("name", "");

        app.appendChild(div);
    }

    nextValueOf(key, menu) {
        this.#ruta.add(key);
        var temproute = this.#ruta.get();
        let unicos = Array.from(new Set(temproute));
        temproute = unicos;
        console.log("getruta -> " + temproute + " <- ultimo elemento -> " + temproute[temproute.length - 1]);
        var option = new SearchKey(menu, temproute);

        if (option == "") {
            var app = document.querySelector("#app");

            var button = document.createElement("button");
            button.setAttribute("class", "btn btn-primary btn-lg launchTest");
            button.setAttribute("id", key);

            var text = document.createTextNode("lanzar prueba");

            button.appendChild(text);
            app.appendChild(button);
            return option;
        } else {
            return option;
        }
    }



    writeOnScreen(valor, id) {
        var element = document.getElementById(id);
        var div = document.createElement("div");
        div.setAttribute("id", valor);
        div.setAttribute("name", "contador ruta");

        for (let i = 0; i < valor.length; i++) {

            var button = document.createElement("button");
            button.setAttribute("id", "boton" + "contador ruta" + "_" + i);
            button.setAttribute("class", "btn btn-primary btn-lg btnMenu");
            button.setAttribute("data", valor[i]);
            console.log("dir ->" + this.#dir);
            if (this.#dir == null) { this.#dir = ""; }
            if (this.#dir.includes(valor[i])) {
                button.setAttribute("dir", this.#dir);
            } else {
                button.setAttribute("dir", this.#dir + "," + valor[i]);
            }

            var text = document.createTextNode(valor[i]);

            button.appendChild(text);

            div.appendChild(button);
        }
        element.appendChild(div);
    }
}