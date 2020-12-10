import { API } from "./API.js";
export class LoadContent {
  #urlMenu = "./json/menucopy.json";
  constructor() {
    return this.#load();
  }
  #load() {
    return new API().get(this.#urlMenu);
  }
}
export class LoadMusicGame {
  #urlMenu = "./json/menumusic.json";
  constructor() {
    return this.#load();
  }
  #load() {
    return new API().get(this.#urlMenu);
  }
}