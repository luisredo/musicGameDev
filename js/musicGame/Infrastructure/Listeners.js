import * as utils from "./utils.js";
import { Session } from "../Shared/Infrastructure/Session.js"

export class Listeners {
  constructor() {  
    this.alIniciar();
    this.loadMusicListen();
  }
  loadMusicListen() {
    document
      .querySelector(".musicgame")
      .addEventListener("click", function () {
        setMusicParams();
      },false);   
  }

  alIniciar() {
    // http://127.0.0.1:5500/musicGameDev/musicgame.html?lenguaje=es&nivelmusic=A1&tipo=music
      var url = this.getURL();
      if(!this.validateURL(url)){
        //ir al inicio
      }
      var params = this.split(url); 
      params = this.paramsToObject(params);
      Session.set("urlParams",params);
      musicGameLoad();  
  }
  validateURL(url){
    if (url == "") return false;
    return true;
  }
  
  getURL(){
    return window.location.search.substr(1);
  }

  split(string,separator="&"){
    return string.split(separator);
  }

  paramsToObject(array){
    var params = new Object;
    array.forEach(element => {
      var keyValue = element.split("=");
      params[keyValue[0]]=keyValue[1];
    });
    return params;
  }
  
}

