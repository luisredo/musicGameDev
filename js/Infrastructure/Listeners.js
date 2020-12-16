import { cargarBuffer, showIn, fillthegaps} from "./getData.js";
import { musicgame, musicGameLoad,setMusicParams } from "./musicGame.js";
import { LoadContent } from "./LoadContent.js";
import { Menu } from "./Menu.js";
import * as utils from "./utils.js";
import { LaunchTest } from "./LaunchTest.js";
import { Ruta } from "./Ruta.js";
import { Session } from "../Shared/Infrastructure/Session.js"
import { Urlget, setSession } from "../Shared/Infrastructure/Urlget.js"

export class Listeners {
  constructor() {
    var ruta = new Ruta();
    this.loadMusicListen();
    this.alIniciar();
    this.btnMenuListen(ruta);
    this.launchTestListen();
    this.loadBufferListen();
    
    this.loadftgListen();
    this.showInListen();
    this.alIniciar();
    this.loadTypeText();
  }
  loadMusicListen() {
    document
      .querySelector(".musicgame")
      .addEventListener("click", function () {
        //musicgame();
        setMusicParams();
      },false);   
  }

  btnMenuListen(ruta) {
    contentfield.addEventListener("click", async function (event) {
      //iOSversion();
      var element = event.path[0];
      if (utils.thisElementHasClass("btnMenu", element)) {
        var data = element.getAttribute("data");
        var dir = element.getAttribute("dir");
        var menu = await new LoadContent();
        new Menu(ruta,dir).onClickMenu(data, menu, dir);
      }
    });
  }

  launchTestListen() {
    contentfield.addEventListener("click", function (event) {
      var element = event.path[0];
      if (utils.thisElementHasClass("launchTest", element)) {
        new LaunchTest();
      }
    });
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



  loadBufferListen() {
    document
      .querySelector(".loadBuffer")
      .addEventListener("click", function () {
        cargarBuffer();
      },false);
  }

  loadftgListen() {
    document
      .querySelector(".fillthegaps")
      .addEventListener("click", function () {
        fillthegaps();
      });   
  }



  loadTypeText() {
    document
      .querySelector(".btnTest")
      .addEventListener("click", function () {
        setMusicParams();
        //typetext();
      });   
  }

  showInListen() {
    contentfield.addEventListener("click", function (event) {
      var element = event.path[0];
      if (utils.thisElementHasClass("showin", element)) {
        showIn(element.getAttribute("showin"));
      }
    });
  }

  
}

