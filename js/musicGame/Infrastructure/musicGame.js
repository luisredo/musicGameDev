
import { MusicGameView } from "./MusicGameView.js";
import { AllContent } from "./ContentSelector.js";
import { API } from "../../Infrastructure/API.js";


export class MusicGame {
    constructor(){
        this.getContent();
        }
    async getContent(){
            const api_URL = "http://api.gameoftesla.com/v1/text/";
            const local_URL = "http://127.0.0.1:5500/json/content.json";
            var vista = new MusicGameView();
            var fullContent = await new API().get(local_URL);
            var allContent = new AllContent(fullContent);
            var arrayOptions = allContent.tagsToArrayElements("A1","it","music");
            var splitIndexSelection = allContent.selectRandomElementFromArray(arrayOptions);
            var urlMediaPlayer = allContent.getMediaPlayer(splitIndexSelection);
            vista.mediaPlayer(urlMediaPlayer);
            var texto = allContent.getContentText(splitIndexSelection);
            vista.showText(texto);
        }
    async getApiContent(url){
         return await new API().get(url);
    }
}
