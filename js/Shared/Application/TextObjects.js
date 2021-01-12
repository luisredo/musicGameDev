export class textObjects{
    #TextTagArray = null;
    constructor(){
        this.#TextTagArray = [];
    }

    addObjectToTagArray(textObject){
        this.#TextTagArray.push(textObject);
    }

    getObjectTagArray(){
        return this.#TextTagArray;
    }

    
}