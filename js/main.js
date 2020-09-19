import {LoadMenu} from "./getData.js";
import { Listeners } from "./listeners.js";
import { urlMenu, devShow, onClickMenu, launchTest } from "./menu.js";



async function initAll() {
  var menu = await new LoadMenu(urlMenu);
  
  await devShow(menu);

  new Listeners();
}
initAll();

