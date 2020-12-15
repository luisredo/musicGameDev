export class Texto {
    #contenedor = [];
    #word = "";
    #tag = "";
    #hueco = "";
    #errores = 0;
    #aciertos = 0;
    constructor(word,tag,hueco) {
      this.#word = word;
      this.#tag = tag;
      this.#hueco = hueco;
    }
    addContenedor(obj){
        this.#contenedor.push(obj);
    }
    adderror(){
        this.#errores++;
    }
    addacierto(){
        this.#aciertos++;
    }
    get errores(){
        return this.#errores;
    }
    get aciertos(){
        return this.#aciertos;
    }
    get Contenedor(){
        return this.#contenedor;
    }
    get Tag(){
        return this.#tag;
    }
    get Hueco(){
        return this.#hueco;
    }
    get Word(){
        return this.#word
    }
    set Tag(tag){
        this.#tag = tag;
    }
    set Word(word){
        this.#word = word;
    }
    set Hueco(hueco){
        this.#hueco = hueco;
    }
}