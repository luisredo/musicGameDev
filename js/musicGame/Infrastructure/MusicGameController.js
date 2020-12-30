import { SearchKey } from "./SearchKey.js";
import { MusicGameView } from "./MusicGameView.js";
import { AllContent } from "./ContentSelector.js";
import { AllContentRepository } from "./AllContentRepository.js";
import { SearchValues } from "./SearchValues.js";
import { utils } from "../Application/utils.js";


export class MusicGameController {
    constructor(){
        //this.getContent();
        this.getRandomContent();
        }

    async getRandomContent(){
        var fullContent = await new AllContentRepository().get();

        var tags = new utils().getArrayTags(fullContent);
        var langs = new utils().getArrayLang(fullContent);
        

        var content = new AllContent(fullContent); 
        var allContent = content.getContent("A1","it","music");

        var urlMediaPlayer = content.getMediaPlayer(allContent);
        var textObject = content.getContentText(allContent);

        var view = new MusicGameView();
        var iframeUI = view.iframeYoutube(urlMediaPlayer);
        var textElementsUI = view.showText(textObject);
        view.printHTML(iframeUI);
        view.printHTML(textElementsUI);
    }

    async getContent(){
            var fullContent = await new AllContentRepository().get();
            var allContent = new AllContent(fullContent);
            //var arrayOptions = allContent.tagsToArrayElements("A1","it","music");
            //var splitIndexSelection = allContent.selectRandomElementFromArray(arrayOptions);
            var urlMediaPlayer = allContent.getMediaPlayer(splitIndexSelection);
            var texto = allContent.getContentText(splitIndexSelection);
            var view = new MusicGameView();
            var iframeUI = view.iframeYoutube(urlMediaPlayer);
            var textElementsUI = view.showText(texto);
            view.printHTML(iframeUI);
            view.printHTML(textElementsUI);
        }

}
