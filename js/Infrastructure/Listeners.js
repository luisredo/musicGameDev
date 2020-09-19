import { cargarBuffer, showIn } from "./getData.js";
import { LoadContent } from "./LoadContent.js";
import { onClickMenu } from "./Menu.js";
import * as utils from "./utils.js";
import { LaunchTest } from "./LaunchTest.js";

export class Listeners {
  constructor() {
    this.btnMenuListen();
    this.launchTestListen();
    this.loadBufferListen();
    this.showInListen();
  }

  btnMenuListen() {
    contentfield.addEventListener("click", async function (event) {
      var element = event.path[0];
      if (utils.thisElementHasClass("btnMenu", element)) {
        var data = element.getAttribute("data");
        var menu = await new LoadContent();
        onClickMenu(data, menu);
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
