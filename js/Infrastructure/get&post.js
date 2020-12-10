//import { musicgame } from "./musicGame.js";

export function getValuesUrl(){
    var getstr = window.location.search.substr(1);
    getstr = getstr.split ("&");
    console.log(getstr);
    sessionStorage.setItem('lenguaje', getstr[0]);
    sessionStorage.setItem('nivelmusic', getstr[1]);
    sessionStorage.setItem('tipo', getstr[2]);
    musicgame();
}
