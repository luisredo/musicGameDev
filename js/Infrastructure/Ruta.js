export class Ruta{
    #ruta = [];
    #dir = ["/"];
    add(ruta){
        this.#ruta.push(ruta);
    }
    get(){
        return this.#ruta;
    }
}