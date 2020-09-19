import { Listeners } from "./Infrastructure/Listeners.js";
import { LoadContent } from "./Infrastructure/LoadContent.js";

async function initAll() {
  var menu = await new LoadContent();

  new Listeners();
}
initAll();
