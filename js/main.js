import { Listeners } from "./Infrastructure/Listeners.js";

async function initAll() {
  new Listeners();
}
initAll();
