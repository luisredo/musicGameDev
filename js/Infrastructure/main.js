import { Listeners } from "./Infrastructure/Listeners.js";
import { iOSversion } from "./Infrastructure/iosfix.js";

async function initAll() {
  new Listeners();
}
iOSversion();
initAll();
