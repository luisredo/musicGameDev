export class Ruta{
    #ruta = [];
    add(ruta){
        this.#ruta.push(ruta);
    }
    get(){
        return this.#ruta;
    }
}