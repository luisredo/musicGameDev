import { LoadMenu, cargarBuffer } from "./getData.js";
import { launchTest, onClickMenu, urlMenu } from "./menu.js";

export class Listeners {
  constructor() {
    this.btnMenuListen();
    this.launchTestListen();
    this.loadBufferListen();
  }

  btnMenuListen() {
    contentfield.addEventListener("click", async function (event) {
      if (event.path[0].classList.contains("btnMenu")) {
        var data = event.path[0].getAttribute("data");
        var menu = await new LoadMenu(urlMenu);
        onClickMenu(data, menu);
      }
    });
  }

  launchTestListen() {
    contentfield.addEventListener("click", function (event) {
      if (event.path[0].classList.contains("launchTest")) {
        launchTest();
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
}
