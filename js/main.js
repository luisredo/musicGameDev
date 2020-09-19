import { loadContent } from "./getData.js";
import { urlMenu, devShow, onClickMenu, launchTest } from "./menu.js";

async function initAll() {
  await loadContent(urlMenu);
  await devShow();
}
initAll();

function btnMenuListen() {
  contentfield.addEventListener("click", function (event) {
    if (event.path[0].classList.contains("btnMenu")) {
      var data = event.path[0].getAttribute("data");
      onClickMenu(data);
    }
  });
}
btnMenuListen();

function launchTestListen() {
  contentfield.addEventListener("click", function (event) {
    if (event.path[0].classList.contains("launchTest")) {
      launchTest();
    }
  });
}
launchTestListen();
