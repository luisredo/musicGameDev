import { Texto } from "./ObjetosEjercicio.js";
import { API } from "./API.js";
import { SearchKey } from "./SearchKey.js";
import { SearchValues } from "./SearchValues.js";
import { Session } from "../Shared/Infrastructure/Session.js";
const API_URL = "http://api.gameoftesla.com/v1/text/";
//const API_URL = "/json/backup.json";
// const API_URL = "http://devla.gameoftesla.com/api/json/backup01.json";

let frase = new Texto();
let buffer = [];
let randomTextApi = [];

export async function musicGameLoad() {
    frase = new Texto();
    document.getElementById("inicio").style.display = "none";
    var texts = await new API().get(API_URL);
    elementClean("#app");
    elementClean("#contenido");
    var numberOfTexts = texts.length;
    console.log(texts);
    buffer = texts;
    var lenguaje = Session.get('lenguaje');
    var dificultad = Session.get('nivel');
    var tipo = Session.get('tipo');
    

    randomTextApi = mapearElementosEnArrayRandom(lenguaje,dificultad,tipo,buffer);
    unShowTagsMusicGame(randomTextApi);
}

export async function setMusicParams(){
    frase = new Texto();
    var texts = await new API().get(API_URL);
    buffer = texts;
    mapearConjuntos(texts);                                
    elementClean("#inicio");
    elementClean("#contenido");
    //document.getElementById("inicio").innerHTML = "";
    document.getElementById("contenido").innerHTML = 
    '<div id="parametros"><span>Confirmar parametros</span><div><br>';
    document.getElementById("contenido").innerHTML += 
    "<div id='botonera' class ='d-flex justify-content-around'>"+
    "<select class='btn btn-primary btn-lg btn-block' name='select' id='idioma'></select>"+
    "<select class='btn btn-primary btn-lg btn-block' name='select' id='select'></select>"+
    "<button class='btn btn-primary btn-lg btn-block iniciar'>Iniciar</button>"+
    "</div>";

    let idiomas = sessionStorage.getItem('arrayLangs');
    let tags = sessionStorage.getItem('arrayTags');
    idiomas = idiomas.split(",");
    tags = tags.split(",");
    console.log("datos para option " + idiomas + " y " + tags);

  var selectags = document.getElementById("select");
  var sel1  = tags;
    if (sel1) {
      for (var i = 0; i < sel1.length; i++) {
        var c = new Option(sel1[i], i);
        selectags.options.add(c);
      }
    }

  var seleclang = document.getElementById("idioma");
  var sel2  = idiomas;
  if (sel2) {
    for (var i = 0; i < sel2.length; i++) {
      var c = new Option(sel2[i], i);
      seleclang.options.add(c);
    }
  }

  iniciarTags("music",texts)

}

export async function typetext() {
    frase = new Texto();
    document.getElementById("inicio").style.display = "none";
    var texts = await new API().get(API_URL);
    elementClean("#app");
    elementClean("#contenido");
    var numberOfTexts = texts.length;
    console.log(texts);
    buffer = texts;

    randomTextApi = mapearElementosEnArrayRandom("it","music","A1",buffer);

    unShowTagsMusicGame(randomTextApi);
}

export async function musicgame() {
    frase = new Texto();
    document.getElementById("inicio").style.display = "none";
    var texts = await new API().get(API_URL);
    elementClean("#app");
    elementClean("#contenido");
    var numberOfTexts = texts.length;
    console.log(texts);
    buffer = texts;
    randomTextApi = mapearElementosEnArrayRandom(lenguaje,dificultad,tipo,buffer);
    unShowTagsMusicGame(randomTextApi);
}

function elementClean(element) {
    return (document.querySelector(element).innerHTML = "");
}

function mapearElementosEnArray(arrbuffer){
    var numElements = [] ;
    for(var p = 0; p < arrbuffer.length; p++){
       numElements.push(getKeyTolist(arrbuffer,[p,'split','video']));
    }
}

function mapearElementosEnArrayRandom(idioma,nivel,tag,arrbuffer){
    var numElements = [] ;
    for(var p = 0; p < arrbuffer.length; p++){
        if (arrbuffer[p].tags[0].tags.includes(tag)==true && arrbuffer[p].tags[0].tags.includes(nivel)==true && arrbuffer[p].tags[0].tags.includes(idioma)==true){
            numElements.push(p);
        }
    }
    var randomObtain = randomFromArray(numElements);
    console.log("[music elements -> " + numElements + " ][ An random element ->(" + randomObtain + ")].");
    return randomObtain;
}

function mapearConjuntos(arrbuffer){
    console.log(arrbuffer);
    var tagsMap = [];
    var langsMap = [];
    for(var p = 0; p < arrbuffer.length; p++){
        var tagValue = [p,'video',0,'tags'];                  
        var langValue = [p,'video',0,'language'];
        var tag = new SearchValues(arrbuffer,tagValue);
        var lenguaje = new SearchValues(arrbuffer,langValue);
        if (arrbuffer[p].video[0].tag!=""){
            for(var n = 0; n < tag.length; n++){
            tagsMap.push(tag[n])
            }
        }
        if (arrbuffer[p].video[0].language!=""){
                langsMap.push(arrbuffer[p].video[0].language);
        }
       
    }
    tagsMap = eliminarElementosRepetidos(tagsMap);
    langsMap = cleanArray(eliminarElementosRepetidos(langsMap));

    console.log("Arrays scaneados sin procesar. \n tags " + tagsMap + "\n lang " + langsMap);
    sessionStorage.setItem('arrayTags', eliminarElementosRepetidos(tagsMap));
    sessionStorage.setItem('arrayLangs', langsMap);
    console.log("tagsmap : " + tagsMap +
      ". langsmap : " +langsMap
      );
}
function cleanArray( a ){
    var newArray = new Array();
    for( var i = 0, j = a.length; i < j; i++ ){
        if ( a[ i ] ){
          newArray.push( a[ i ] );
      }
    }
    return newArray;
  }

function eliminarElementosRepetidos(a){
    for(var i = a.length -1; i >=0; i--){
    if(a.indexOf(a[i]) !== i) a.splice(i,1);
    }
    return a;
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

function unShowTagsMusicGame(randomNum){
    console.log("va salir -> "+ buffer[randomNum].title[0].title);
}

function devDataOnContenido(num){
    document.getElementById("contenido").innerHTML += "<br>"+
    "<span>" + buffer[num].title[0].title + "</span> <br>" +
    "<span>" + buffer[num].video[0].tags.length + "</span> <br>" + 
    "<span>" + buffer[num].tags[0].tags + "</span> <br>" 
    ;
}

function insertarClip(video){
    insertarVideo(video);
    devMostrarClaseTexto();
    corregirListen();
}

function getKeyTolist(jsonArray,ArrayList){
    var option = new SearchKey(jsonArray,ArrayList);
    return option;
}

function wordJoinerWTags(jsonArray,ArrayList,leveltag,num){
    console.log("inicia wordjoiner");
    var textoCompleto = "";

    //let cont = [];
    for (var listaTexto = 0; listaTexto < ArrayList.length; listaTexto ++){
        let palabra = new Texto();
        var optionValue = [num,'split', listaTexto ,'text'];                //*****/
        var tagValue = [num,'split', listaTexto ,'tags'];                   //*****/
        var tag = OutputStringBuilder(new SearchValues(jsonArray,tagValue));
        var word = OutputStringBuilder(new SearchValues(jsonArray,optionValue));
        palabra.Word = word;

        if(tag.includes(leveltag) == true){
            palabra.Hueco = "#";
            console.log("Tag para filtar "+ leveltag +". Unico criterio");
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

function insertarVideo(video){
    document.getElementById("media").innerHTML += 
    `<div><iframe class="btn btn-primary btn-lg btn-block" width="560" height="315" src="https://www.youtube.com/embed/`+ video +`"  allowfullscreen></iframe>` +
    `<button id='corregirHuecos' class='btn btn-primary btn-lg btn-block corregirHuecos'>Corregir</button></div>`;
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

function corregirListen(){
    document.
    querySelector(".corregirHuecos")
    .addEventListener("click", function () {
        corregir();
        colorear();
        obtenerHuecos();
        pintarResultado();
    },false);
}

function pintarResultado(){
        document.getElementById("contenido").innerHTML += "<div class='btn btn-primary btn-lg btn-block'> Aciertos: " +frase.aciertos +  " Errores: " +frase.errores + "</div>";
        console.log(frase.aciertos + "_Good Counter " + frase.errores + "_Error Counter");
}

function obtenerHuecos(){
    let values=[];
    values = obtenerValoresHuecos();
    recorreHuecos(values);
    console.log("Numero de objetos Texto -> " + frase.Contenedor.length + "Valores : " + values);
}

function iniciarTags(type,array){

    document.
    querySelector(".iniciar")
    .addEventListener("click", function () {
        var lenguaje = sessionStorage.getItem('lenguaje');
        let getSelect = getOption("select");
        let getIdioma = getOption("idioma");
        document.getElementById("parametros").innerHTML = "";
        document.getElementById("botonera").innerHTML = "";
        randomTextApi = mapearElementosEnArrayRandom(getSelect,"music",getIdioma,buffer);
        console.log("numero de texto " + randomTextApi) + "\n" + buffer;
        insertarClip(array[randomTextApi].video[0].url);
        imprimirEjercicio(randomTextApi,getSelect,array);
    
    },false);   
}

function imprimirEjercicio(num,tag,array){
    document.getElementById("app").innerHTML ="<br><br>" +
    wordJoinerWTags(buffer,getKeyTolist(array,[num,'split']),tag,num) 
    + "<br><br>";
    document.getElementById("select").value = tag;
}

function getOption(id){
    let opciones = document.getElementById(id).value;
    return opciones = document.getElementById(id).options[opciones].text;
}

function lanzarBusqueda(){
    randomTextApi = mapearElementosEnArrayRandom("it","music","A1",buffer);
    unShowTagsMusicGame(randomTextApi);
}

function iniciar(num){
    document.
    querySelector(".iniciar")
    .addEventListener("click", function () {
    let val = document.getElementById("select").value;
    insertarClip(buffer[num].video[0].url);
    imprimirEjercicio(num,val);
    
    document.getElementById("parametros").innerHTML = "";
    document.getElementById("botonera").innerHTML = "";
    },false);
    
}

function randomFromArray(array){
    return array[Math.floor(Math.random() * array.length)];
}

export function corregir(){
    console.log("No e pochible");
    frase.Contenedor.forEach((element) => {
        console.log("[Corregir] Palabra ["+element.Word+
        "] Tags ["+element.Tag+"]"+
        "] Huecos ["+element.Hueco+"]");
        
    })
}

function colorear() {
        var x, i;
        x = document.querySelectorAll(".hueco");
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "red";
    }
}

function OutputStringBuilder(ArrayString){
    var word = [];
    for(var i =0;i<ArrayString.length;i++){
        word += ArrayString[i];
    }
    return word;
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

function fixedWords(element){
    if(element.includes("\\n")){
        return element = '<br><br>';
    } else {
        return element = '<span class="texto">' + element + '</span>';}
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

function obtenerValoresHuecos(){
    var x, i;
    let respuestas = [];
    x = document.querySelectorAll(".hueco");
    for (i = 0; i < x.length; i++) {
        respuestas.push(x[i].value);
    }
    return respuestas;
}

function fixLowercase(campo1,campo2){
    return campo1.toLowerCase()==campo2.toLowerCase();
}

