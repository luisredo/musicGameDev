export class LoadContent {
  constructor(url = "") {
    return this.#load(url);
  }
  async #load(url) {
    return await fetch(url)
      .then((data) => data.json())
      .then((data) => {
        let myObj = [];

        myObj = data;
        document.getElementById("app").innerHTML = "";
        if (myObj.length == undefined) {
          //
        } else {
          for (let i = 0; i < myObj.length; i++) {
            console.log(myObj[i]);
            buffer[i] = myObj[i];
          }
          return buffer;
        }
      });
  }
}
