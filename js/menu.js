let urlmenu = "../json/menu.json";
var ruta = [];                  //  buffer global de ruta y claves para carga de ficheros.
var opt = [];                   //  buffer contenedor.
let cruta = 0;                  //  contador de divisores.
let initbool = "true";          //  fix carga diferida de nivel.

function menu(){
    // devShow();
    setOnScreen(menuList,"app");
}


class SearchKey {
    #data = {};
    #route = [];
    constructor (json,route = []){
        this.#data = json;
        this.#route = route;
        this.#transform();
        return this.#search();
    }
    #search(){
        return Array.from(Object.keys(this.#data));
    }
    #transform(){
        this.#route.forEach(element => {
        this.#data = this.#data[element];
        });
    }
}

function devShow(){
    var route =  [];
    console.log("json "+ menuList);
    var options = new SearchKey(menuList,route);
    console.log(options);

    route.push(options[0]);

    options = new SearchKey(menuList,route);
    console.log(options + " ROUTE0 " + route);

    route.push(options[1]);
    options = new SearchKey(menuList,route);
    console.log(options + " ROUTE1 " + route);

    route.push(options[2]);
    options = new SearchKey(menuList,route);
    console.log(options + " ROUTE2 " + route);


}

function onClickMenu(key){
    console.log("onclick key "+key);
    if(key==""){
        var option = new SearchKey(menuList,ruta);
        opt.push(option);
        console.log("ver las opciones "+ opt);
        document.getElementById("app").innerHTML += `<br><div id='cat-`+cruta+`' name='`+cruta+`'></div><br>`;
        writeOnScreen(option,"cat-"+cruta);
    }else{
        document.getElementById("app").innerHTML += `<br><div id='cat-`+cruta+`' name='`+cruta+`'></div><br>`;
        writeOnScreen(nextValueOf(key),"cat-"+cruta);
    }
}

function nextValueOf(key){

        ruta.push(key);
        var option = new SearchKey(menuList,ruta);
        console.log(" option " + option + " len " + option.length);
        if(option == "" ){
            //alert("Este arbol no tiene mas ramas.");
            document.getElementById("app").innerHTML += `<input type='button' class='btn btn-primary btn-lg' id="chisclander" value='lanzar prueba' onclick='launch()' \>`;
            return option;
        }else{
            return option;
        }
}

function writeOnScreen(valor,id){
    for (let i = 0; i < valor.length; i++) {
        document.getElementById(id).innerHTML += `<input type='button' id='boton`+ cruta +"_"+i+`'class='btn btn-primary btn-lg' id="` + valor[i] + `" value='`+ valor[i] +`' onclick='onClickMenu("`+valor[i]+`")' \>`;
    }
    cruta ++;
    console.log("RUTA FINAL DE MENU " + ruta);
}

function valuesOfId(val){
    console.log("valuesOfId " + val + " len " + val.length);
    if (val!=""){
        for (let index = 0; index < val.length; index++) {
            if (document.getElementById(val[index]).value == val[index]){
                return index;
                break;
            }
        }
    } else {
        alert("No se puede mostrar conetenido del menu.");
    }
}

function launch(){
alert("Se lanza la funcion de carga por pantalla de X ejercicio.");
}