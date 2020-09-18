/*
*       funcion inicial 
*       Se definen javascript iniciales y funciones de carga
*/
function initAll(){
    importarScript("/js/getData.js", scriptCargado("getData"));
    importarScript("/js/menu.js", scriptCargado("menu"));
    //importarScript("/js/####.js", scriptCargado("####"));
    setTimeout(() => {  loadContent(urlmenu); }, 50);
    setTimeout(() => {  devShow(); }, 100);
}
/*
*       Importar js en javascipt
*/
function importarScript(nombre, callback) {
    var s = document.createElement("script");
    s.onload = callback;
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}
/*
*       reporte por consola del ok en carga
*/
function scriptCargado(jsname) {
    console.log("Carga ok" + jsname);
}
/* 
*       mostrar por consola una lista y su evento.
*/
function mostrarPorConsola(lista,evento){
    console.log("carga "+ evento +" : ");
    console.log(lista);
}