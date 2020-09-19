import {LoadMenu} from "./Infrastructure/getData.js";
import { Listeners } from "./Infrastructure/Listeners.js";
import {  devShow} from "./Infrastructure/menu.js";


async function initAll() {
  var menu = await new LoadMenu();
  
  await devShow(menu);

  new Listeners();
}
initAll();

