import { API } from "./API";
import { MusicGameView } from "./MusicGameView.js";
import { getFilesIndexFromContent, randomSelectorFromFile } from "./ContentSelector.js";

export class MusicGame {
    constructor(params){
        new MusicGameView();
        }
    getContent(){
            const api_URL = "http://api.gameoftesla.com/v1/text/";
            new MusicGameView();
            var Content = await new API().get(api_URL);
            var arrayOptions =new ContentSelector.getFilesIndexFromContent("it","music","A1",fileContent);
            var SelectedOprtion =new ContentSelector.randomSelectorFromFile(arrayOptions);
            console.log(SelectedOprtion);
        }
}
