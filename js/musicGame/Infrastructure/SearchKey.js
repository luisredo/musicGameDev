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
      try {
        return Array.from(Object.keys(this.#data));
      } catch (error) {
        console.log("error.");
      }
    }
    #transform() {
      this.#route.forEach((element) => {
        this.#data = this.#data[element];
      });
    }
  }
