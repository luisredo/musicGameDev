import { cargarBuffer, showIn } from "./getData.js";
import { LoadContent } from "./LoadContent.js";
import { Menu } from "./Menu.js";
import * as utils from "./utils.js";
import { LaunchTest } from "./LaunchTest.js";
import { Ruta } from "./Ruta.js";

export class Listeners {
  constructor() {
    var ruta = new Ruta();
    this.btnMenuListen(ruta);
    this.launchTestListen();
    this.loadBufferListen();
    this.showInListen();
  }

  btnMenuListen(ruta) {
    contentfield.addEventListener("click", async function (event) {
      var element = event.path[0];
      if (utils.thisElementHasClass("btnMenu", element)) {
        var data = element.getAttribute("data");
        var menu = await new LoadContent();
        new Menu(ruta).onClickMenu(data, menu);
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

  loadBufferListen() {
    document
      .querySelector(".loadBuffer")
      .addEventListener("click", function () {
        cargarBuffer();
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
