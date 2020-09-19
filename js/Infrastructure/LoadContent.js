import { API } from "./API.js";
export class LoadContent {
  #urlMenu = "./json/menu.json";
  constructor() {
    return this.#load();
  }
  #load() {
    return new API().get(this.#urlMenu);
  }
}
