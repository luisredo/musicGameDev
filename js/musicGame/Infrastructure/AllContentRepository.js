import { API } from "../../Infrastructure/API.js";

export class AllContentRepository{
    #localURL = "http://127.0.0.1:5500/json/content.json";
    #apiURL = "http://api.gameoftesla.com/v1/text/";
    async get(){
        return await this.getApiContent(this.#localURL);
    }

    async getApiContent(url){
        return await new API().get(url);;
    }


}