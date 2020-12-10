let urlmenu = "../json/menu.json";
var ruta = [];                  //  buffer global de ruta y claves para carga de ficheros.
var opt = [];                   //  buffer contenedor.
let cruta = 0;                  //  contador de divisores.
let initbool = "true";          //  fix carga diferida de nivel.
let catList = [];

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
function devPintar(){
    document.getElementById("dev").innerHTML = `<p>Opciones de desarrollador</p>`;
    document.getElementById("dev").innerHTML +=  `<input type='button' class='btn btn-primary btn-lg' id="chisclander2" value='rm cat-0' onclick='eliminarDivVacio("cat-0")' \>`;
    document.getElementById("dev").innerHTML +=  `<input type='button' class='btn btn-primary btn-lg' id="chisclander2" value='rm cat-1' onclick='eliminarDivVacio("cat-1")' \>`;
    document.getElementById("dev").innerHTML +=  `<input type='button' class='btn btn-primary btn-lg' id="chisclander2" value='rm cat-2' onclick='eliminarDivVacio("cat-2")' \>`;
}
function onClickMenu(key){
    if (document.getElementById("menuc")!= undefined){
        document.getElementById("prueba").remove();
        document.getElementById("menuc").remove();
    }

    devPintar();

    if(ruta.length > 0){
            if (catList.length > ruta.length){
            console.log("catList < ruta lista[ids] -> " + catList + " <-");
        }
    }

    try {
        resolve(key);
      }
      catch(err) {
        ruta.pop();
        catList.pop();
        console.log(err.message);
        eliminarNameDiv("category",catList.length);
        //eliminarDivVacio(catList[catList.length-1]);
        console.log("resultado de la cola de ids -> " + catList);
      }
}
function resolve(key){
    if(key==""){
        var option = new SearchKey(menuList,ruta);
        opt.push(option);
        console.log("ver las opciones "+ opt);
        let compare = (agregarNoRepetido(catList,"cat-"+cruta));
        if (compare == "true"){
            console.log("encola 1");
            document.getElementById("app").innerHTML += `<div id='cat-`+cruta+`' name='category'><br></div>`;
            writeOnScreen(option,"cat-"+cruta);
        }   else    {
            console.log("no encola");
        }
    }else{
        let compare = (agregarNoRepetido(catList,"cat-"+cruta));
        if (compare == "true"){
            console.log("encola 2");
            document.getElementById("app").innerHTML += `<div id='cat-`+cruta+`' name='category'><br></div>`;
            writeOnScreen(nextValueOf(key),"cat-"+cruta);
        }   else    {
            console.log("no encola");
        }

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
        document.getElementById(id).innerHTML += `<input type='button' id='boton`+ cruta +"_"+i+`' name='boton`+ cruta +"_"+i+`' class='btn btn-primary btn-lg' id="` + valor[i] + `" value='`+ valor[i] +`' onclick='onClickMenu("`+valor[i]+`")' \>`;
    }
    cruta++;
    console.log("RUTA FINAL DE MENU " + ruta);
    console.log("catList < ruta lista[ids] -> " + catList + " <-");
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
        console.log("No se puede mostrar conetenido del menu.");
    }
}

function launch(){
console.log("Se lanza la funcion de carga por pantalla de X ejercicio.");
}
function ocultarCategorias(list){
console.log("tamaño de categorias: " + list.length)
}
/*
*       funcion compara en una lista si elemento a introducir ya existe en esta,
*       si no existe encola el nuevo elemento y devuelve un true confirmando que se ha
*       encolado, en el caso de no encolar devuelve un false
*/
function agregarNoRepetido(l,str){
    //alert("agregarNoRepetido " + l.includes(str) + " lista de mierdas "+ catList );
    let comp = l.includes(str);
    console.log("lista tiene " + l + " vas a comparar " + str + " la comparacion resulta " + comp);
    if(l.includes(str)==false){
        catList.push("cat-"+cruta);
        return "true";
        //eliminarDivVacio(catList[catList.length-1]);
    }
    if(comp==true){
        //eliminarDivVacio(catList[catList.length-1]);
        return "false";
    }
}

function eliminarDivVacio(id){

    try {
        document.getElementById(id).remove();
      }
      catch(err) {
        alert("No existe esa id, pulsa algo a ver si tienes suerte.");
        console.log(err.message);
      }
    /*
    if (document.getElementById(id).innerHTML.indexOf("-") != -1) {
        document.getElementById(id).remove();
        }
        */
}
/*
*       busca por tagname y devuelve la id a la funcion remove
*       con la intencion de borrar el div vacio y no generar espacios basura en el html
*/
function eliminarNameDiv(name,index){
    console.log("name ["+name+"] index ["+index+"]");
    console.log("name ["+name+"] index ["+index+"] eliminar un div "+document.getElementsByName(name)[index].text);
    document.getElementById(document.getElementsByName(name)[index].id).remove();
}