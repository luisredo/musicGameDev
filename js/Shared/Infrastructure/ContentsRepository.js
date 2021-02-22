import { API } from "./API.js";

export class ContentsRepository{
    #localURL = "http://127.0.0.1:5501/json/content.json";
    #apiURL = "http://api.gameoftesla.com/v1/text/";
    async get(){
        return await this.getApiContent(this.#localURL);
    }
    async getFTG(){
        return await this.getApiContent(this.#apiURL);
    }

    async getApiContent(url){
        return await new API().get(url);;
    }


}