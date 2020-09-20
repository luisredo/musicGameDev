export class Texts {
  #texts = null;
  #api = null;
  constructor(api) {
    this.#texts = [];
    this.#api = api;
    this.#importTexts();
  }
  async #importTexts() {
    this.#texts = await this.#api.get("http://api.gameoftesla.com/v1/text/");
  }
  get() {
    return this.#texts;
  }
}
