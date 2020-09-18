const API_URL = "http://api.gameoftesla.com/v1/text/";
let buffer = [];
let menuList = [];
/*
*       Importar js fuera del html
*/
function importarScript(nombre, callback) {
    var s = document.createElement("script");
    s.onload = callback;
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}
/*
*       INICIO PRUBAS DE SETEO INICIAL
*/
function cargarBuffer(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    let myObj = [];
      if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("app").innerHTML = "";
        document.getElementById("contenido").innerHTML = "";
        for(let i = 0;i<myObj.length;i++){
            buffer[i] = (myObj[i]);
            console.log(buffer[i]);
            //alert("tamaño tags[" + i + "] " + buffer[i].split[0].tags.length);
            recorrerTags(i);
            //document.getElementById("app").innerHTML += `<p><input type="button" value="titulo: `+ buffer[i].title[0].title + ` | ` + buffer[0].tags[0].tags[0] +  ` | ` + buffer[0].tags[0].tags[1] + `" onclick="`+tagsOnButtons(i,buffer[i].split[0].tags[0])+`"></input></p>`;
        }
      }
    };
    xmlhttp.open("GET", API_URL , true);
    xmlhttp.send();
}

function recorrerTags(index){
    let lang = buffer[index].tags[0].tags[0];
    let type = buffer[index].tags[0].tags[1];
    // alert("size tags ["+buffer[index].split[0].tags.length+"]");
    for (let x = 0; x < buffer[index].split[0].tags.length; x++) {
        //alert("reocorrertags index: "+index);
        // tagsOnButtons(buffer[index].split[0].tags[x],index)
        document.getElementById("contenido").innerHTML += `<p><input type="button" class="btn btn-primary btn-lg btn-block" onclick="showIn(`+ index +`)" value="texto nº `+ index +` | tag: `+ buffer[index].split[0].tags[x] + ` |  titulo: `+ buffer[index].title[0].title + ` | ` + buffer[index].tags[0].tags[0] +  ` | ` + buffer[index].tags[0].tags[1] +`"></input></p>`;
    }
}

function tagsOnButtons(tag,index){
    //alert("tagsonbutton index: "+index);
        //document.getElementById("app").innerHTML += `<p><input type="button" value="titulo: `+ buffer[i].title[0].title + ` | ` + buffer[0].tags[0].tags[0] +  ` | ` + buffer[0].tags[0].tags[1] + `" onclick="`+mostrar()+`"></input></p>`;
    document.getElementById("app").innerHTML += `<p><input type="button" value="titulo: `+ tag +` onclick="`+mostrar(index)+`" \ ></p>`;
}

function showIn(index) {
    document.getElementById("contenido").innerHTML = "";
    document.getElementById("app").innerHTML =`<span>`+ buffer[index].title[0].title + "</span> <br><br>";

    for(let i = 0;i<buffer[index].split.length;i++){
        if(buffer[index].split[i].text == "\\n"){
            document.getElementById("app").innerHTML += `<br>`;
        }else{
            document.getElementById("app").innerHTML += `<span>`+ buffer[index].split[i].text + ` </span>` ;
        }
    }
}
/*
*       FINAL PRUBAS DE SETEO INICIAL
*/


/*
*       loadContent
*       Carga inicial de ficheros json
*       diferencia entre "menu" o "textos"
*/
function loadContent(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    let myObj = [];
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            document.getElementById("app").innerHTML = "";
            if(myObj.length == undefined){
                menuList = myObj;
                //mostrarPorConsola(menuList,"loadcontent");
                // menu();
                // return myObj;
            }else {
                for(let i = 0;i<myObj.length;i++){
                    console.log(myObj[i]);
                    buffer[i]=myObj[i];
                }
                return buffer;
            }

        }
    };
    xmlhttp.open("GET", url , true);
    xmlhttp.send();
}