import { Objeto } from "./ObjetosEjercicio.js";
import { API } from "./API.js";
import { SearchKey } from "./SearchKey.js";
import { SearchValues } from "./SearchValues.js";
import { musicgame } from "./musicGame.js";

const API_URL = "http://api.gameoftesla.com/v1/text/";

let buffer = [];
let frase = new Objeto();

export let menuList = [];

export async function cargarBuffer() {
    var texts = await new API().get(API_URL);
    elementClean("#app");
    elementClean("#contenido");
    var numberOfTexts = texts.length;
    for (let text = 0; text < numberOfTexts; text++) {
        buffer[text] = texts[text];
        showText(text);
    }
}

export async function fillthegaps() {
    frase = new Objeto();
    document.querySelector(".fillthegaps").disabled;
    var texts = await new API().get(API_URL);
    elementClean("#app");
    elementClean("#contenido");
    var numberOfTexts = texts.length;
    
   buffer = texts;
   unShowTags(buffer);

}

/*
export async function musicgame() {
    frase = new Objeto();
    //ocument.querySelector(".fillthegaps").disabled;
    document.getElementById("inicio").style.display = "none";
    var texts = await new API().get(API_URL);
    elementClean("#app");
    elementClean("#contenido");
    var numberOfTexts = texts.length;
    console.log(texts);
    buffer = texts;
    unShowTagsMusicGame(filtrarPorTag("music",buffer));

}
*/

export function showIn(index) {
    document.getElementById("contenido").innerHTML = "";
    document.getElementById("app").innerHTML =
        `<H2>` + buffer[index].title[0].title + `</H2> <br><br>`;

    for (let i = 0; i < buffer[index].split.length; i++) {
        if (buffer[index].split[i].text == "\\n") {
            document.getElementById("app").innerHTML += `<br>`;
        } else {
            document.getElementById("app").innerHTML +=
                `<span class="text">` + buffer[index].split[i].text + ` </span>`;
        }
    }
}

export function corregir(){
console.log("No e pochible");
frase.Contenedor.forEach((element) => {
    
        console.log("[Corregir] Palabra ["+element.Word+
        "] Tags ["+element.Tag+"]"+
        "] Huecos ["+element.Hueco+"]");
    
})
}

function elementClean(element) {
    return (document.querySelector(element).innerHTML = "");
}

function fixedWords(element){
    if(element.includes("\\n")){
        return element = '<br><br>';
    } else {
        return element = '<span class="texto">' + element + '</span>';}
}

function OutputStringBuilder(ArrayString){
    var word = [];
    for(var i =0;i<ArrayString.length;i++){
        word += ArrayString[i];
    }
    return word;
}
/*
*       devuelve claves de una ruta
*/
function getKeyTolist(jsonArray,ArrayList){
    var option = new SearchKey(jsonArray,ArrayList);
    return option;
}
/*
*       devuelve valores partiendo de una ruta
*/
function wordJoiner(jsonArray,ArrayList){
    var textoCompleto = "";
    for (var listaTexto = 0; listaTexto < ArrayList.length; listaTexto ++){
        var optionValue = ['0','split', listaTexto ,'text'];
        var word = OutputStringBuilder(new SearchValues(jsonArray,optionValue));
        word = fixSpaceValue(word);
        textoCompleto += fixedWords(word);
    }
    return textoCompleto;
}
/*
*
*/
function obtenerValoresHuecos(){
    var x, i;
    let respuestas = [];
    x = document.querySelectorAll(".hueco");
    for (i = 0; i < x.length; i++) {
        respuestas.push(x[i].value);
    }
    return respuestas;
}

function colorear() {
    var x, i;
    x = document.querySelectorAll(".hueco");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
    }
}

function recorreHuecos(respuestas){
    let response = respuestas.reverse();
    let request = [];
    var pos = 0;

    frase.Contenedor.forEach((element) => {
        if(element.Tag != ''){
            console.log("Acces - Palabra ["+element.Word+"] Tags ["+element.Tag+"]");
            request.push(element.Word);
        } else {
            //console.log("Palabra ["+element.Word+"]");
        }
        
    })  

    request.reverse();
    let x = document.querySelectorAll(".hueco");
    for(let i = 0;i<x.length;i++){
        let r = request.pop();
        //if(x[i].value == r){
        if(fixLowercase(x[i].value,r)){
            x[i].style.backgroundColor = "green";
            frase.addacierto();
            console.log("response green -> [" + r + "]request [" + x[i].value + "]value " + frase.aciertos + "_Good Counter");
            
        }else{
            x[i].style.backgroundColor = "yellow";
            frase.adderror();
            console.log("response yellow [" + r + "]request [" + x[i].value + "]value " + frase.errores + "_Error Counter");
            
        }
    }
}

function wordJoinerWTags(jsonArray,ArrayList){
    console.log("inicia wordjoiner");
    var textoCompleto = "";
    //let cont = [];
    for (var listaTexto = 0; listaTexto < ArrayList.length; listaTexto ++){
        let palabra = new Objeto();
        var optionValue = [0,'split', listaTexto ,'text'];                //*****/
        var tagValue = [0,'split', listaTexto ,'tags'];                   //*****/
        var tag = OutputStringBuilder(new SearchValues(jsonArray,tagValue));
        var word = OutputStringBuilder(new SearchValues(jsonArray,optionValue));
        palabra.Word = word;
        
        if(tag.length > 0){
            palabra.Hueco = "#";
            word = '<input type="text" size="3" class="texto hueco" value="" name="'+ listaTexto +'">' ;
        }

        word = fixSpaceValue(word);
        textoCompleto += fixedWords(word);
        palabra.Tag = tag;
        frase.addContenedor(palabra);
        //cont.push(frase);

    }
    return textoCompleto;
}

function wordJoinerWT(jsonArray,ArrayList,numText){
    console.log("inicia wordjoiner");
    //numText = 2;
    var textoCompleto = "";
    //let cont = [];
    for (var listaTexto = 0; listaTexto < ArrayList.length; listaTexto ++){
        let palabra = new Objeto();
        var optionValue = [numText,'split', listaTexto ,'text'];                //*****/
        var tagValue = [numText,'split', listaTexto ,'tags'];                   //*****/
        var tag = OutputStringBuilder(new SearchValues(jsonArray,tagValue));
        var word = OutputStringBuilder(new SearchValues(jsonArray,optionValue));
        palabra.Word = word;
        
        if(tag.length > 0){
            palabra.Hueco = "#";
            word = '<input type="text" size="3" class="texto hueco" value="" name="'+ listaTexto +'">' ;
        }

        word = fixSpaceValue(word);
        textoCompleto += fixedWords(word);
        palabra.Tag = tag;
        frase.addContenedor(palabra);
        //cont.push(frase);

    }
    return textoCompleto;
}

function devMostrarClaseObjeto(){
    frase.Contenedor.forEach((element) => {
        if(element.tag != ''){
            console.log("Palabra ["+element.Word+"] Tags ["+element.Tag+"]");
        } else {
            console.log("Palabra ["+element.Word+"]");
        }
        
    })   
}

function showText(){
    document.getElementById("app").innerHTML ="<br><br>" +
    wordJoiner(buffer,getKeyTolist(buffer,['0','split'])) 
    + "<br><br>";

}

function unShowTags(){
    var devTag = '';
    document.getElementById("app").innerHTML ="<br><br>" +
    wordJoinerWT(buffer, getKeyTolist(buffer,['2','split']),2) 
    + "<br><br>";
    document.getElementById("contenido").innerHTML = "<br>" + 
    "<button class='btn btn-primary btn-lg btn-block corregirHuecos'>Corregir</button>"
    + "<br>";
    devMostrarClaseObjeto();
    corregirListen();
}

function filtrarPorTag(tag,arrbuffer){
    var numElements = [] ;
    for(var p = 0; p < arrbuffer.length; p++){
        if (arrbuffer[p].tags[0].tags.includes(tag)==true){
            numElements.push(p);
        }
    }
    var randomObtain = randomFromArray(numElements);
    console.log("[music elements -> " + numElements + " ][ An random element ->(" + randomObtain + ")].");
    return randomObtain;
}

function randomFromArray(array){
    return array[Math.floor(Math.random() * array.length)];
}
/*
function unShowTagsMusicGame(){
    var devTag = '';
    
    document.getElementById("app").innerHTML ="<br><br>" +
    wordJoinerWTags(buffer,getKeyTolist(buffer,['0','split'])) 
    + "<br><br>";
    document.getElementById("contenido").innerHTML = "<br>" + 
    "<button id='corregirHuecos' class='btn btn-primary btn-lg btn-block corregirHuecos' >Corregir</button>" +
    "<br>" + 
    "<span>" + buffer[0].title[0].title + "</span> <br>" +
    "<span>" + buffer[0].video[0].url + "</span> <br>" + 
    "<span>" + buffer[0].tags[0].tags + "</span> <br>" 
    ;
    insertarVideo();
    devMostrarClaseObjeto();
    corregirListen();
}
*/
function unShowTagsMusicGame(randomNum){
    
    document.getElementById("app").innerHTML ="<br><br>" +
    wordJoinerWTags(buffer,getKeyTolist(buffer,[randomNum,'split'])) 
    + "<br><br>";
    document.getElementById("contenido").innerHTML = "<br>" + 
    "<button id='corregirHuecos' class='btn btn-primary btn-lg btn-block corregirHuecos' >Corregir</button>" +
    "<br>" + 
    "<span>" + buffer[randomNum].title[0].title + "</span> <br>" +
    "<span>" + buffer[randomNum].video[0].url + "</span> <br>" + 
    "<span>" + buffer[randomNum].tags[0].tags + "</span> <br>" 
    ;
    insertarVideo(buffer[randomNum].video[0].url);
    devMostrarClaseObjeto();
    corregirListen();
}

function insertarVideo(video){
    document.getElementById("contenido").innerHTML += 
    `<iframe class="btn btn-primary btn-lg btn-block" width="560" height="315" src="https://www.youtube.com/embed/`+ video +`"  allowfullscreen></iframe>`;
}

function corregirListen(){
    document.
    querySelector(".corregirHuecos")
    .addEventListener("click", function () {
        corregir();
        colorear();
        obtenerHuecos();
    },false);
}

function textOnScreen(clave, ruta) {
    var option = new SearchKey(menu, dir);
}

function fixSpaceValue(expression){
    switch(expression) {
        case ',':
          return expression;
          break ;
        case '.':
            return expression;
          break;
        default:
            return ' ' + expression;
      }
}

function fixLowercase(campo1,campo2){
    return campo1.toLowerCase()==campo2.toLowerCase();
}

function obtenerHuecos(){
    let values=[];
    values = obtenerValoresHuecos();
    recorreHuecos(values);
    console.log("Numero de objetos OBJETO -> " + frase.Contenedor.length + "Valores : " + values);
}

