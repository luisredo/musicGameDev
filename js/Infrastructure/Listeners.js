import { cargarBuffer, showIn, fillthegaps} from "./getData.js";
import { musicgame, musicGameLoad,setMusicParams ,typetext } from "./musicGame.js";
import { LoadContent } from "./LoadContent.js";
import { Menu } from "./Menu.js";
import * as utils from "./utils.js";
import { LaunchTest } from "./LaunchTest.js";
import { Ruta } from "./Ruta.js";
//import { iOSversion } from "./Infrastructure/iosfix.js";
export class Listeners {
  constructor() {
    var ruta = new Ruta();
    this.alIniciar();
    this.btnMenuListen(ruta);
    this.launchTestListen();
    this.loadBufferListen();
    this.loadMusicListen();
    this.loadftgListen();
    this.showInListen();
    this.alIniciar();
    this.loadTypeText();
  }

  btnMenuListen(ruta) {
    contentfield.addEventListener(sessionStorage.getItem('isIOS'), async function (event) {
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
    contentfield.addEventListener(sessionStorage.getItem('isIOS'), function (event) {
      var element = event.path[0];
      if (utils.thisElementHasClass("launchTest", element)) {
        new LaunchTest();
      }
    });
  }

  alIniciar() {
    window.onload = function(){
      var getstr = window.location.search.substr(1);
      if(getstr!=""){
        getstr = getstr.split ("&");
        console.log(getstr);
        sessionStorage.setItem('lenguaje', getstr[0]);
        sessionStorage.setItem('nivelmusic', getstr[1]);
        sessionStorage.setItem('tipo', getstr[2]);
        musicGameLoad();
      } else {
        //document.getElementById("dev_menu").style.visibility = "hidden";
      }
    } 
  }

  loadBufferListen() {
    document
      .querySelector(".loadBuffer")
      .addEventListener(sessionStorage.getItem('isIOS'), function () {
        cargarBuffer();
      },false);
  }

  loadftgListen() {
    document
      .querySelector(".fillthegaps")
      .addEventListener(sessionStorage.getItem('isIOS'), function () {
        fillthegaps();
      });   
  }

  loadMusicListen() {
    document
      .querySelector(".musicgame")
      .addEventListener(sessionStorage.getItem('isIOS'), function () {
        musicgame();
      },false);   
  }

  loadTypeText() {
    document
      .querySelector(".btnTest")
      .addEventListener(sessionStorage.getItem('isIOS'), function () {
        setMusicParams();
        //typetext();
      });   
  }

  showInListen() {
    contentfield.addEventListener(sessionStorage.getItem('isIOS'), function (event) {
      var element = event.path[0];
      if (utils.thisElementHasClass("showin", element)) {
        showIn(element.getAttribute("showin"));
      }
    });
  }

  
}

