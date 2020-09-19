export class SearchKey {
    #data = {};
    #route = [];
    constructor(json, route = []) {
      this.#data = json;
      this.#route = route;
      this.#transform();
      return this.#search();
    }
    #search() {
      return Array.from(Object.keys(this.#data));
    }
    #transform() {
      this.#route.forEach((element) => {
        this.#data = this.#data[element];
      });
    }
  }