export class API {
  #data = null;
  async get(url) {
    await fetch(url)
      .then((data) => data.json())
      .then((data) => {
        this.#data = data;
      });
    return this.#data;
  }
}
